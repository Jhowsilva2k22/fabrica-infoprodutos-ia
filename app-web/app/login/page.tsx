'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/AuthContext'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await login(email, password)

    if (error) {
      setError('Email ou senha incorretos. Verifique seus dados.')
      setLoading(false)
    } else {
      router.push('/')
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1 className="login-logo">Fábrica IA</h1>
          <p className="login-subtitle">Acesse sua área de aluno</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="login-error">{error}</div>}

          <div className="login-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              autoFocus
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              required
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className="login-footer">
          <p>Ainda não tem acesso? <a href="https://pay.kiwify.com.br/dBGEodq" target="_blank" rel="noopener">Adquira o curso</a></p>
          <p className="login-help">Comprou e não recebeu o acesso? <a href="mailto:joanderson5@gmail.com">Fale conosco</a></p>
        </div>
      </div>

      <style jsx>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          padding: 20px;
        }
        .login-card {
          width: 100%;
          max-width: 420px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 40px 32px;
        }
        .login-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .login-logo {
          font-size: 28px;
          font-weight: 800;
          background: linear-gradient(135deg, #6366f1, #818cf8);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 8px;
        }
        .login-subtitle {
          color: #86868b;
          font-size: 14px;
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .login-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .login-field label {
          font-size: 13px;
          color: #86868b;
          font-weight: 500;
        }
        .login-field input {
          padding: 12px 14px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          color: #f5f5f7;
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s;
          font-family: inherit;
        }
        .login-field input:focus {
          border-color: #6366f1;
        }
        .login-field input::placeholder {
          color: #52525b;
        }
        .login-btn {
          padding: 14px;
          background: linear-gradient(135deg, #6366f1, #818cf8);
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          margin-top: 4px;
        }
        .login-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(99,102,241,0.35);
        }
        .login-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .login-error {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.2);
          color: #ef4444;
          padding: 12px;
          border-radius: 8px;
          font-size: 13px;
          text-align: center;
        }
        .login-footer {
          text-align: center;
          margin-top: 28px;
          font-size: 13px;
          color: #86868b;
        }
        .login-footer a {
          color: #818cf8;
          text-decoration: none;
        }
        .login-footer a:hover {
          text-decoration: underline;
        }
        .login-help {
          margin-top: 8px;
          font-size: 12px;
          color: #52525b;
        }
      `}</style>
    </div>
  )
}
