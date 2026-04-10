import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Rotas públicas - não proteger
  const publicPaths = ['/login', '/api/webhook']
  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  // Arquivos estáticos - não proteger
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/icon') ||
    pathname.startsWith('/apple-icon') ||
    pathname.endsWith('.pdf') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.ico')
  ) {
    return NextResponse.next()
  }

  // Verificar se tem variáveis do Supabase (dev mode = deixar passar)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!supabaseUrl) {
    return NextResponse.next()
  }

  // Verificar cookie de autenticação
  const authCookie = request.cookies.get('fabrica_auth')?.value

  // Também checar cookies padrão do Supabase (sb-*-auth-token)
  const allCookies = request.cookies.getAll()
  const supabaseCookie = allCookies.find(c => c.name.includes('auth-token'))

  if (!authCookie && !supabaseCookie) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
