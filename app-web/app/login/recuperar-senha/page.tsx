'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default function RecuperarSenhaPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/login/nova-senha`,
    })

    if (error) {
      setError('Erro ao enviar email. Verifique o endereço e tente novamente.')
      setLoading(false)
    } else {
      setSent(true)
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1 className="login-logo">Fábrica IA</h1>
          <p className="login-subtitle">
            {sent ? 'Email enviado!' : 'Recuperar sua senha'}
          </p>
        </div>

        {sent ? (
          <div className="success-box">
            <div className="success-icon">✉️</div>
            <p className="success-text">
              Enviamos um link de recuperação para <strong>{email}</strong>.
            </p>
            <p className="success-hint">
              Verifique sua caixa de entrada e a pasta de spam. O link expira em 1 hora.
            </p>
            <Link href="/login" className="back-link">
              ← Voltar ao login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="login-form">
            {error && <div className="login-error">{error}</div>}

            <p className="form-desc">
              Digite seu email e enviaremos um link para criar uma nova senha.
            </p>

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

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar link de recuperação'}
            </button>

            <div className="form-footer">
              <Link href="/login" className="back-link">
                ← Voltar ao login
              </Link>
            </div>
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
        .form-desc {
          color: #a1a1aa;
          font-size: 14px;
          line-height: 1.5;
          text-align: center;
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
          font-size: 15px;
          line-height: 1.5;
        }
        .success-text strong {
          color: #818cf8;
        }
        .success-hint {
          color: #71717a;
          font-size: 13px;
          line-height: 1.5;
        }
        .form-footer {
          text-align: center;
        }
        .back-link {
          color: #818cf8;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }
        .back-link:hover {
          color: #a5b4fc;
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}
