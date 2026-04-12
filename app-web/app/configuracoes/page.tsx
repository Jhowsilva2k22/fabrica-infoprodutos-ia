'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/lib/AuthContext'

export default function ConfiguracoesPage() {
  const { student } = useAuth()
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleChangePassword(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (newPassword.length < 6) {
      setError('A nova senha precisa ter pelo menos 6 caracteres.')
      return
    }

    if (newPassword !== confirmPassword) {
      setError('As senhas não coincidem.')
      return
    }

    setLoading(true)

    // First verify current password by trying to sign in
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: student?.email || '',
      password: currentPassword,
    })

    if (signInError) {
      setError('Senha atual incorreta.')
      setLoading(false)
      return
    }

    // Update password
    const { error: updateError } = await supabase.auth.updateUser({
      password: newPassword,
    })

    if (updateError) {
      setError('Erro ao atualizar senha. Tente novamente.')
      setLoading(false)
      return
    }

    setSuccess('Senha atualizada com sucesso!')
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
    setLoading(false)
  }

  return (
    <div className="config-page">
      <h1 className="config-title">Configurações</h1>
      <p className="config-subtitle">Gerencie sua conta e preferências</p>

      {/* Account Info */}
      <div className="config-card">
        <h2 className="card-title">Sua conta</h2>
        <div className="account-info">
          <div className="info-row">
            <span className="info-label">Nome</span>
            <span className="info-value">{student?.name || '—'}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Email</span>
            <span className="info-value">{student?.email || '—'}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Status</span>
            <span className="status-badge">{student?.status === 'active' ? '✓ Ativo' : 'Inativo'}</span>
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="config-card">
        <h2 className="card-title">Alterar senha</h2>

        <form onSubmit={handleChangePassword} className="password-form">
          {error && <div className="form-error">{error}</div>}
          {success && <div className="form-success">{success}</div>}

          <div className="form-field">
            <label htmlFor="currentPassword">Senha atual</label>
            <input
              id="currentPassword"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Digite sua senha atual"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="newPassword">Nova senha</label>
            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Mínimo 6 caracteres"
              required
              minLength={6}
            />
          </div>

          <div className="form-field">
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

          <button type="submit" className="save-btn" disabled={loading}>
            {loading ? 'Atualizando...' : 'Atualizar senha'}
          </button>
        </form>
      </div>

      <style jsx>{`
        .config-page {
          max-width: 600px;
          padding: 40px 24px;
        }
        .config-title {
          font-size: 28px;
          font-weight: 700;
          color: #f5f5f7;
          margin-bottom: 8px;
        }
        .config-subtitle {
          color: #86868b;
          font-size: 15px;
          margin-bottom: 32px;
        }
        .config-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 24px;
        }
        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #f5f5f7;
          margin-bottom: 20px;
        }
        .account-info {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .info-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .info-label {
          color: #86868b;
          font-size: 14px;
        }
        .info-value {
          color: #f5f5f7;
          font-size: 14px;
          font-weight: 500;
        }
        .status-badge {
          color: #22c55e;
          font-size: 13px;
          font-weight: 500;
          background: rgba(34,197,94,0.1);
          padding: 4px 12px;
          border-radius: 20px;
        }
        .password-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-field label {
          font-size: 13px;
          color: #86868b;
          font-weight: 500;
        }
        .form-field input {
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
        .form-field input:focus {
          border-color: #6366f1;
        }
        .form-field input::placeholder {
          color: #52525b;
        }
        .save-btn {
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
        .save-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(99,102,241,0.35);
        }
        .save-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .form-error {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.2);
          color: #ef4444;
          padding: 12px;
          border-radius: 8px;
          font-size: 13px;
          text-align: center;
        }
        .form-success {
          background: rgba(34,197,94,0.1);
          border: 1px solid rgba(34,197,94,0.2);
          color: #22c55e;
          padding: 12px;
          border-radius: 8px;
          font-size: 13px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
