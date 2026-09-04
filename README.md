# Motion Labs — Website

A from-scratch React + Node.js site for Motion Labs: video editing, content
shoots, product shoots, short-form UGC, social media management, and website
development.

## Structure

```
motionlabs/
├── frontend/   React (Vite) + Tailwind v4 + Framer Motion
└── backend/    Node.js + Express — powers the contact form
```

## Design system

- **Canvas** `#0B0D0F` · **Ivory text** `#F4F2ED` · **Graphite** `#8B8F94`
- **Accent amber** `#E8875A` · **Accent teal** `#3FA9A0`
  (the orange/teal pair is the classic cinema color-grade — a deliberate nod
  to the agency's craft, not a random accent choice)
- **Display type**: Clash Display · **Body type**: Inter
- Liquid blob hero (SVG "goo" filter + Framer Motion), a scroll-linked reveal
  on the work grid, and a soft glow on focused form fields — that's the full
  motion budget. Everything else stays quiet on purpose.

## Running locally

**Frontend**
```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

**Backend**
```bash
cd backend
npm install
cp .env.example .env    # fill in real SMTP credentials
npm run dev              # http://localhost:5050
```

The frontend dev server proxies `/api/*` to `http://localhost:5050`, so run
both together while developing.

## Wiring up the contact form

The form posts to `POST /api/contact`. Until `SMTP_HOST` is set in
`backend/.env`, submissions are just logged to the console — useful for
testing without real credentials. Fill in `.env` with any SMTP provider
(Gmail app password, Zoho, SendGrid SMTP, etc.) to start actually receiving
enquiries by email.

## Before this goes live

1. **Replace placeholder content**: the four project cards in `Work.jsx` and
   both quotes in `Testimonials.jsx` are placeholders — swap in real project
   thumbnails/videos and client quotes (with permission) once available.
2. **Swap the color-gradient thumbnails** in `Work.jsx` for real stills or
   video posters.
3. **Set real social links** in `Footer.jsx`.
4. **Point `CONTACT_TO`** in `backend/.env` at the inbox that should receive
   enquiries.

## Deploying

- **Frontend**: `npm run build` in `frontend/` produces a static `dist/`
  folder — deploy to Vercel, Netlify, or any static host.
- **Backend**: deploy `backend/` to Render, Railway, or any Node host; set
  the same env vars from `.env.example` there, and set `CLIENT_ORIGIN` to
  your deployed frontend URL.
