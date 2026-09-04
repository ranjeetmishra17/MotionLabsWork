import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'
import contactRouter from './routes/contact.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5050

app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }))
app.use(express.json())

// Basic abuse protection on the public contact endpoint
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
})

app.get('/api/health', (_req, res) => res.json({ ok: true }))
app.use('/api/contact', contactLimiter, contactRouter)

app.listen(PORT, () => {
  console.log(`Motion Labs API listening on port ${PORT}`)
})
