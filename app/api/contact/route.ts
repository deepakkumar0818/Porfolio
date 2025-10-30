import { NextResponse } from 'next/server'
export const runtime = 'nodejs'
import nodemailer from 'nodemailer'

type ContactPayload = {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

function requireEnv(name: string, fallback?: string) {
  const value = process.env[name] ?? fallback
  if (!value) throw new Error(`Missing required env: ${name}`)
  return value
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>
    const name = (body.name || '').trim()
    const email = (body.email || '').trim()
    const phone = (body.phone || '').trim()
    const subject = (body.subject || '').trim()
    const message = (body.message || '').trim()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    let transporter: nodemailer.Transporter
    let fromAddress: string

    const hasSmtp = !!process.env.SMTP_HOST && !!process.env.SMTP_USER && !!process.env.SMTP_PASS
    const to = process.env.CONTACT_TO || 'deepakkumr0818@gmail.com'

    if (hasSmtp) {
      const host = requireEnv('SMTP_HOST')
      const port = Number(requireEnv('SMTP_PORT', '587'))
      const user = requireEnv('SMTP_USER')
      const pass = requireEnv('SMTP_PASS')
      transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } })
      fromAddress = user
    } else {
      // Fallback to Ethereal test account for local development
      const testAccount = await nodemailer.createTestAccount()
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: { user: testAccount.user, pass: testAccount.pass },
      })
      fromAddress = testAccount.user
    }

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#0f172a">
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;background:#f8fafc;padding:12px;border-radius:8px">${message}</pre>
      </div>
    `

    const info = await transporter.sendMail({
      from: { name: 'Portfolio Contact', address: fromAddress },
      replyTo: email,
      to,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n${phone ? `Phone: ${phone}\n` : ''}Subject: ${subject}\n\n${message}`,
      html,
    })

    const previewUrl = nodemailer.getTestMessageUrl?.(info) || undefined
    return NextResponse.json({ ok: true, previewUrl })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}


