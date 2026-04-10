import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const APP_URL = 'https://app-web-rouge.vercel.app'

export async function sendWelcomeEmail({
  to,
  name,
  password,
}: {
  to: string
  name: string
  password: string
}) {
  const firstName = name.split(' ')[0] || 'aluno(a)'

  const { data, error } = await resend.emails.send({
    from: 'Fábrica de Infoprodutos <onboarding@resend.dev>',
    to,
    subject: `${firstName}, seu acesso ao Modo Fábrica está pronto!`,
    html: buildWelcomeHTML({ firstName, email: to, password }),
  })

  if (error) {
    console.error('Resend error:', error)
    throw new Error(`Failed to send email: ${error.message}`)
  }

  console.log(`📧 Email enviado para ${to} | ID: ${data?.id}`)
  return data
}

function buildWelcomeHTML({
  firstName,
  email,
  password,
}: {
  firstName: string
  email: string
  password: string
}) {
  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#111111;border-radius:12px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#4f46e5,#6366f1,#818cf8);padding:40px 40px 30px;text-align:center;">
              <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px;font-weight:700;">
                Modo Fábrica
              </h1>
              <p style="color:rgba(255,255,255,0.85);font-size:14px;margin:0;letter-spacing:1px;text-transform:uppercase;">
                Fábrica de Infoprodutos com IA
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="color:#ffffff;font-size:22px;margin:0 0 16px;font-weight:600;">
                Bem-vindo(a), ${firstName}! 🎉
              </h2>

              <p style="color:#a1a1aa;font-size:15px;line-height:1.6;margin:0 0 24px;">
                Sua compra foi confirmada e seu acesso à plataforma já está liberado. Abaixo estão seus dados de login:
              </p>

              <!-- Credentials Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a1a2e;border:1px solid #2d2d44;border-radius:8px;margin-bottom:24px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="color:#818cf8;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 16px;font-weight:600;">
                      Seus dados de acesso
                    </p>

                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:8px 0;">
                          <span style="color:#71717a;font-size:13px;">Email:</span>
                        </td>
                        <td style="padding:8px 0;text-align:right;">
                          <span style="color:#ffffff;font-size:14px;font-weight:500;">${email}</span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" style="border-bottom:1px solid #2d2d44;"></td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;">
                          <span style="color:#71717a;font-size:13px;">Senha:</span>
                        </td>
                        <td style="padding:8px 0;text-align:right;">
                          <code style="color:#818cf8;font-size:15px;font-weight:600;background:#0f0f23;padding:4px 10px;border-radius:4px;letter-spacing:1px;">${password}</code>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td align="center">
                    <a href="${APP_URL}/login"
                       style="display:inline-block;background:linear-gradient(135deg,#4f46e5,#6366f1);color:#ffffff;text-decoration:none;padding:14px 40px;border-radius:8px;font-size:15px;font-weight:600;letter-spacing:0.5px;">
                      Acessar a Plataforma →
                    </a>
                  </td>
                </tr>
              </table>

              <p style="color:#71717a;font-size:13px;line-height:1.5;margin:0 0 8px;">
                Recomendamos que troque sua senha no primeiro acesso.
              </p>
              <p style="color:#71717a;font-size:13px;line-height:1.5;margin:0;">
                Se tiver qualquer dúvida, responda este email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #1e1e1e;text-align:center;">
              <p style="color:#52525b;font-size:12px;margin:0;">
                Fábrica de Infoprodutos com IA — Modo Fábrica
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}
