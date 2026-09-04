import nodemailer from 'nodemailer'

let transporter = null

function getTransporter() {
  if (transporter) return transporter

  // Works with any SMTP provider — Gmail, Zoho, SendGrid SMTP, etc.
  // Set these in backend/.env (see .env.example).
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
  return transporter
}

export async function sendContactEmail({ name, email, service, message }) {
  // If SMTP isn't configured yet, log instead of failing the request —
  // useful while wiring up credentials during setup.
  if (!process.env.SMTP_HOST) {
    console.log('[contact form submission — SMTP not configured]', {
      name,
      email,
      service,
      message,
    })
    return
  }

  const t = getTransporter()
  await t.sendMail({
    from: `"Motion Labs Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO || process.env.SMTP_USER,
    replyTo: email,
    subject: `New enquiry: ${service || 'General'} — ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nService: ${service || 'Not specified'}\n\n${message}`,
  })
}
