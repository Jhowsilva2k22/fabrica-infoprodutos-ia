'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function NovaSenhaPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [ready, setReady] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Supabase auto-detects the recovery token from URL hash
    supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setReady(true)
      }
    })

    // Check if already in a recovery session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setReady(true)
      }
    })
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (password.length < 6) {
      setError('A senha precisa ter pelo menos 6 caracteres.')
      return
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.')
      return
    }

    setLoading(true)

    const { error } = await supabase.auth.updateUser({ password })

    if (error) {
      setError('Erro ao atualizar senha. O link pode ter expirado. Solicite um novo.')
      setLoading(false)
    } else {
      setSuccess(true)
      setLoading(false)
      // Redirect to login after 3 seconds
      setTimeout(() => router.push('/login'), 3000)
    }
  }

  if (!ready && !success) {
    return (
      <div className="login-page">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-logo">Fábrica IA</h1>
            <p className="login-subtitle">Verificando link...</p>
          </div>
          <p style={{ color: '#71717a', textAlign: 'center', fontSize: '14px' }}>
            Se nada acontecer em alguns segundos, o link pode ter expirado.
            <a href="/login/recuperar-senha" style={{ color: '#818cf8', marginLeft: '4px' }}>
              Solicite um novo link.
            </a>
          </p>
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
            margin-bottom: 24px;
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
        `}</style>
      </div>
    )
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1 className="login-logo">Fábrica IA</h1>
          <p className="login-subtitle">
            {success ? 'Senha atualizada!' : 'Criar nova senha'}
          </p>
        </div>

        {success ? (
          <div className="success-box">
            <div className="success-icon">✅</div>
            <p className="success-text">
              Sua senha foi atualizada com sucesso!
            </p>
            <p className="success-hint">
              Redirecionando para o login em 3 segundos...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="login-form">
            {error && <div className="login-error">{error}</div>}

            <div className="login-field">
              <label htmlFor="password">Nova senha</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                required
                autoFocus
                minLength={6}
              />
            </div>

            <div className="login-field">
              <label htmlFor="confirmPassword">Confirmar nova senha</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Digite novamente"
                required
                minLength={6}
              />
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? 'Atualizando...' : 'Atualizar senha'}
            </button>
          </form>
        )}
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
        .success-box {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .success-icon {
          font-size: 48px;
        }
        .success-text {
          color: #f5f5f7;
          font-size: 16px;
          font-weight: 500;
        }
        .success-hint {
          color: #71717a;
          font-size: 13px;
        }
      `}</style>
    </div>
  )
}
