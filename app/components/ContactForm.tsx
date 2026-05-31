'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    fontFamily: 'var(--font-roboto)',
    fontWeight: 400,
    fontSize: '16px',
    color: '#111',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid #bbb',
    outline: 'none',
    padding: '10px 0',
    width: '100%',
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" style={{ maxWidth: '600px' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="E-Mail"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          style={inputStyle}
        />
      </div>
      <textarea
        placeholder="Nachricht"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
        rows={5}
        style={{ ...inputStyle, resize: 'none' }}
      />
      <div className="flex items-center gap-6">
        <button
          type="submit"
          disabled={status === 'sending'}
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 300,
            fontSize: '14px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#fff',
            backgroundColor: '#111',
            border: 'none',
            padding: '14px 32px',
            cursor: status === 'sending' ? 'not-allowed' : 'pointer',
            opacity: status === 'sending' ? 0.6 : 1,
          }}
        >
          {status === 'sending' ? 'Senden...' : 'Senden'}
        </button>
        {status === 'success' && (
          <p style={{ fontFamily: 'var(--font-roboto)', fontSize: '15px', color: '#444' }}>
            Nachricht gesendet. Wir melden uns bald!
          </p>
        )}
        {status === 'error' && (
          <p style={{ fontFamily: 'var(--font-roboto)', fontSize: '15px', color: '#c00' }}>
            Fehler beim Senden. Bitte versuche es erneut.
          </p>
        )}
      </div>
    </form>
  )
}
