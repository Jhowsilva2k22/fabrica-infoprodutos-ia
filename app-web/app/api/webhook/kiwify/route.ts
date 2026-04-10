import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase'
import { sendWelcomeEmail } from '@/lib/email'

// Webhook da Kiwify - chamado quando uma compra é aprovada
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Verificar secret do webhook (opcional mas recomendado)
    const webhookSecret = process.env.KIWIFY_WEBHOOK_SECRET
    if (webhookSecret) {
      const signature = request.headers.get('x-kiwify-signature') || ''
      if (signature !== webhookSecret) {
        return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
      }
    }

    // Kiwify envia diferentes eventos
    const event = body.order_status || body.subscription_status

    // Só processar compras aprovadas
    if (event !== 'paid' && event !== 'completed') {
      return NextResponse.json({ message: 'Event ignored', event }, { status: 200 })
    }

    // Extrair dados do comprador
    const customerEmail = body.Customer?.email || body.customer?.email
    const customerName = body.Customer?.full_name || body.customer?.full_name || body.Customer?.name || ''
    const orderId = body.order_id || body.Order?.order_id || ''
    const transactionId = body.Transaction?.id || body.transaction_id || ''

    if (!customerEmail) {
      return NextResponse.json({ error: 'No customer email found' }, { status: 400 })
    }

    const supabase = createServiceClient()

    // Criar usuário no Supabase Auth (com senha temporária)
    const tempPassword = generatePassword()

    const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
      email: customerEmail,
      password: tempPassword,
      email_confirm: true, // Confirmar email automaticamente
    })

    // Se o usuário já existe no Auth, não tem problema
    if (authError && !authError.message.includes('already been registered')) {
      console.error('Auth error:', authError)
    }

    // Inserir ou atualizar na tabela students
    const { error: dbError } = await supabase
      .from('students')
      .upsert({
        email: customerEmail.toLowerCase(),
        name: customerName,
        status: 'active',
        kiwify_order_id: orderId,
        kiwify_transaction_id: transactionId,
        purchased_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }, {
        onConflict: 'email',
      })

    if (dbError) {
      console.error('DB error:', dbError)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    // Enviar email de boas-vindas com credenciais
    try {
      await sendWelcomeEmail({
        to: customerEmail,
        name: customerName,
        password: tempPassword,
      })
      console.log(`✅ Novo aluno: ${customerEmail} | Email enviado com sucesso`)
    } catch (emailError) {
      // Loga erro mas não falha o webhook — aluno já foi criado
      console.error('Email send error:', emailError)
    }

    return NextResponse.json({
      success: true,
      message: 'Student created and email sent',
      email: customerEmail,
    })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Gerar senha aleatória de 8 caracteres
function generatePassword(): string {
  const chars = 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let password = ''
  for (let i = 0; i < 8; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}
