'use client'

import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

const inputStyle: React.CSSProperties = {
  fontFamily: 'var(--font-roboto)',
  fontWeight: 400,
  fontSize: '18px',
  color: '#111',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid #bbb',
  outline: 'none',
  width: '100%',
  paddingBottom: '8px',
  paddingTop: '4px',
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-roboto)',
  fontWeight: 400,
  fontSize: '18px',
  color: '#888',
  display: 'block',
  marginBottom: '2px',
}

export default function ContactPage() {
  const [form, setForm] = useState({
    vorname: '',
    nachname: '',
    tel: '',
    email: '',
    unternehmen: '',
    erzaehl: '',
    budget: '',
  })

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = encodeURIComponent(
      `Vorname: ${form.vorname}\nNachname: ${form.nachname}\nTel: ${form.tel}\nE-Mail: ${form.email}\nUnternehmen: ${form.unternehmen}\nBudget: ${form.budget}\n\n${form.erzaehl}`
    )
    window.location.href = `mailto:info@unfoldcreativestudio.ch?subject=Projektanfrage&body=${body}`
  }

  return (
    <main>
      {/* ── Intro ── */}
      <div className="bg-[#F6F6F6] py-16 sm:py-20">
        <div className="wrapper flex flex-col gap-8">
          <SectionHeading>CONTACT</SectionHeading>

          <div className="flex flex-col gap-5">
            <p
              style={{
                fontFamily: 'var(--font-pp-mori)',
                fontWeight: 600,
                fontSize: '40px',
                lineHeight: '1.3',
                color: '#111',
              }}
            >
              Lets Create Something Unique Together
            </p>

            <p
              style={{
                fontFamily: 'var(--font-roboto)',
                fontWeight: 400,
                fontSize: '28px',
                lineHeight: '1.7',
                color: '#111',
              }}
            >
              Lass uns gemeinsam kreative Ideen entfalten.<br />
              Egal ob du eine starke visuelle Identität,<br />
              Content für Social Media oder ein frisches Webdesign suchst –<br />
              ich freue mich, deine Vision kennenzulernen.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            <a
              href="mailto:info@unfoldcreativestudio.ch"
              className="flex items-center gap-3 hover:opacity-60 transition-opacity"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 300,
                fontSize: '24px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#111',
                textDecoration: 'none',
              }}
            >
              <svg width="22" height="17" viewBox="0 0 22 17" fill="none">
                <rect x="1" y="1" width="20" height="15" rx="1" stroke="#111" strokeWidth="1.5" />
                <path d="M1 2L11 9.5L21 2" stroke="#111" strokeWidth="1.5" />
              </svg>
              GET IN TOUCH
            </a>

            <a
              href="https://www.instagram.com/unfoldcreativestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-60 transition-opacity"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 300,
                fontSize: '24px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#111',
                textDecoration: 'none',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="1" y="1" width="20" height="20" rx="5" stroke="#111" strokeWidth="1.5" />
                <circle cx="11" cy="11" r="4" stroke="#111" strokeWidth="1.5" />
                <circle cx="16.5" cy="5.5" r="1" fill="#111" />
              </svg>
              FOLLOW THE JOURNEY
            </a>
          </div>
        </div>
      </div>

      {/* ── Form ── */}
      <div className="bg-white py-16 sm:py-20">
        <div className="wrapper">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
              {/* Row 1 */}
              <div>
                <label htmlFor="vorname" style={labelStyle}>Vorname *</label>
                <input
                  id="vorname"
                  type="text"
                  required
                  value={form.vorname}
                  onChange={set('vorname')}
                  style={inputStyle}
                  className="focus:border-black transition-colors"
                />
              </div>
              <div>
                <label htmlFor="nachname" style={labelStyle}>Nachname *</label>
                <input
                  id="nachname"
                  type="text"
                  required
                  value={form.nachname}
                  onChange={set('nachname')}
                  style={inputStyle}
                  className="focus:border-black transition-colors"
                />
              </div>

              {/* Row 2 */}
              <div>
                <label htmlFor="tel" style={labelStyle}>Tel. *</label>
                <input
                  id="tel"
                  type="tel"
                  required
                  value={form.tel}
                  onChange={set('tel')}
                  style={inputStyle}
                  className="focus:border-black transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>E-Mail *</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={set('email')}
                  style={inputStyle}
                  className="focus:border-black transition-colors"
                />
              </div>

              {/* Row 3 */}
              <div>
                <label htmlFor="unternehmen" style={labelStyle}>Unternehmen / Marke</label>
                <input
                  id="unternehmen"
                  type="text"
                  value={form.unternehmen}
                  onChange={set('unternehmen')}
                  style={inputStyle}
                  className="focus:border-black transition-colors"
                />
              </div>
              <div>
                <label htmlFor="erzaehl" style={labelStyle}>Erzähl uns mehr</label>
                <textarea
                  id="erzaehl"
                  rows={1}
                  value={form.erzaehl}
                  onChange={set('erzaehl')}
                  style={{ ...inputStyle, resize: 'none' }}
                  className="focus:border-black transition-colors"
                />
              </div>

              {/* Row 4 */}
              <div>
                <label htmlFor="budget" style={labelStyle}>Budget-Rahmen</label>
                <input
                  id="budget"
                  type="text"
                  value={form.budget}
                  onChange={set('budget')}
                  style={inputStyle}
                  className="focus:border-black transition-colors"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-12">
              <button
                type="submit"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: '24px',
                  letterSpacing: '0.06em',
                }}
                className="uppercase border border-black rounded-full px-6 py-2 cursor-pointer hover:bg-black hover:text-white transition-colors"
              >
                START YOUR PROJECT
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
