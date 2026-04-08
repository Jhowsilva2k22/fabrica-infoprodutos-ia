'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { supabase } from './supabase'

interface Student {
  id: string
  email: string
  name: string | null
  status: string
}

interface AuthContextType {
  student: Student | null
  loading: boolean
  login: (email: string, password: string) => Promise<{ error: string | null }>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  student: null,
  loading: true,
  login: async () => ({ error: null }),
  logout: async () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [student, setStudent] = useState<Student | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verificar sessão existente
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        fetchStudent(session.user.email!)
      } else {
        setLoading(false)
      }
    })

    // Ouvir mudanças de auth
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        fetchStudent(session.user.email!)
      } else {
        setStudent(null)
        setLoading(false)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  async function fetchStudent(email: string) {
    const { data, error } = await supabase
      .from('students')
      .select('*')
      .eq('email', email)
      .eq('status', 'active')
      .single()

    if (data && !error) {
      setStudent(data)
    } else {
      // Usuário autenticado mas não é aluno ativo
      setStudent(null)
    }
    setLoading(false)
  }

  async function login(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return { error: error.message }
    return { error: null }
  }

  async function logout() {
    await supabase.auth.signOut()
    setStudent(null)
  }

  return (
    <AuthContext.Provider value={{ student, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
