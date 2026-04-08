import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Rotas públicas - não proteger
  const publicPaths = ['/login', '/api/webhook']
  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  // Arquivos estáticos - não proteger
  if (pathname.startsWith('/_next') || pathname.startsWith('/favicon') || pathname.includes('.')) {
    return NextResponse.next()
  }

  // Verificar token de autenticação
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    // Se não tem Supabase configurado, deixar passar (dev mode)
    return NextResponse.next()
  }

  // Pegar token dos cookies
  const accessToken = request.cookies.get('sb-access-token')?.value
    || request.cookies.get(`sb-${new URL(supabaseUrl).hostname.split('.')[0]}-auth-token`)?.value

  if (!accessToken) {
    // Tentar pegar do cookie padrão do Supabase
    const allCookies = request.cookies.getAll()
    const supabaseCookie = allCookies.find(c => c.name.includes('auth-token'))

    if (!supabaseCookie) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // Verificar se o token é válido
  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
    })

    // Tentar recuperar a sessão
    const cookieValue = request.cookies.getAll()
      .find(c => c.name.includes('auth-token'))?.value

    if (cookieValue) {
      try {
        const parsed = JSON.parse(cookieValue)
        const token = parsed?.access_token || parsed?.[0]?.access_token
        if (token) {
          const { data: { user }, error } = await supabase.auth.getUser(token)
          if (user && !error) {
            return NextResponse.next()
          }
        }
      } catch {
        // Cookie inválido
      }
    }

    return NextResponse.redirect(new URL('/login', request.url))
  } catch {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
