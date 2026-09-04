import { Router } from 'express'
import { sendContactEmail } from '../lib/mailer.js'

const router = Router()

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

router.post('/', async (req, res) => {
  const { name, email, service, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }
  if (String(message).length > 5000) {
    return res.status(400).json({ error: 'Message is too long.' })
  }

  try {
    await sendContactEmail({ name, email, service, message })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Failed to send contact email:', err.message)
    return res.status(500).json({ error: 'Could not send message right now. Please try again shortly.' })
  }
})

export default router
