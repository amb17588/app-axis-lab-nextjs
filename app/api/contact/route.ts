import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, message } = body as Record<string, string>

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const htmlBody = `
      <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;background:#0d0d0d;padding:32px">
        <tr>
          <td>
            <table width="600" align="center" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#1a1a2e,#16213e);border-radius:12px;overflow:hidden">
              <tr>
                <td style="background:linear-gradient(135deg,#e91e8c,#9c27b0);padding:24px 32px">
                  <h1 style="color:#fff;margin:0;font-size:22px">New Project Enquiry — AppAxisLab</h1>
                </td>
              </tr>
              <tr>
                <td style="padding:32px;color:#ccc;font-size:15px;line-height:1.7">
                  <p><strong style="color:#e91e8c">Name:</strong> ${name}</p>
                  <p><strong style="color:#e91e8c">Email:</strong> ${email}</p>
                  ${company ? `<p><strong style="color:#e91e8c">Company:</strong> ${company}</p>` : ''}
                  <hr style="border:none;border-top:1px solid rgba(255,255,255,0.1);margin:20px 0"/>
                  <p><strong style="color:#e91e8c">Message:</strong></p>
                  <p style="white-space:pre-wrap">${message}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `

    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME ?? 'AppAxisLab'}" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO ?? process.env.SMTP_USER,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: htmlBody,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
