import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string; message?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 })
  }

  const name = body?.name?.trim()
  const email = body?.email?.trim()
  const message = body?.message?.trim()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Bitte fülle alle Pflichtfelder aus.' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Bitte gib eine gültige E-Mail-Adresse an.' }, { status: 400 })
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('Contact form: SMTP environment variables are not configured.')
    return NextResponse.json(
      { error: 'Der Mailversand ist noch nicht konfiguriert. Bitte schreib uns direkt per E-Mail.' },
      { status: 503 }
    )
  }

  const port = Number(SMTP_PORT) || 587
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  try {
    await transporter.sendMail({
      from: `"Unfold Website" <${SMTP_USER}>`,
      to: process.env.CONTACT_TO || 'info@unfoldcreativestudio.ch',
      replyTo: email,
      subject: `Neue Projektanfrage von ${name}`,
      text: `${message}\n\n— gesendet via unfoldcreativestudio.ch`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })
  } catch (err) {
    console.error('Contact form: sendMail failed', err)
    return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden. Bitte versuche es später erneut.' }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
