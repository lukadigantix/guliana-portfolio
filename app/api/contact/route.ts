import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Alle Felder sind erforderlich.' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"${name}" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO || 'info@unfoldcreativestudio.ch',
    replyTo: email,
    subject: `Neue Anfrage von ${name}`,
    text: message,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Nachricht:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
    `,
  })

  return NextResponse.json({ success: true })
}
