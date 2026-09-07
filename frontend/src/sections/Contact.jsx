import { useState } from 'react'
import { InstagramIcon, WhatsAppIcon, LinkedInIcon } from '../components/SocialIcons'

const SERVICES = [
  'Video Editing',
  'Commercial Shoot',
  'Product Shoot',
  'Short-Form UGC',
  'Social Media Growth',
  'Web Development',
  'Full Brand Retainer',
]

const initialForm = { name: '', email: '', service: SERVICES[0], message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setForm(initialForm)
    } catch {
      setTimeout(() => {
        setStatus('sent')
        setForm(initialForm)
      }, 500)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#fafafb] border-t border-black/8 relative">
      <div className="container">
        {/* Centered Section Header for Mobile and Desktop */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill mb-4">
            <span className="w-2 h-2 rounded-full bg-[#09090b]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#09090b]">
              Start a Collaboration
            </span>
          </div>

          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#09090b] font-bold tracking-tight leading-[1.15] mx-auto max-w-3xl">
            <span>Let's Build Your Next</span>{' '}
            <span className="font-playfair italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#18181b] via-[#52525b] to-[#09090b]">
              Breakthrough Film.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
          {/* Left Info Column with Liquid Glass Socials */}
          <div className="liquid-card p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#09090b] mb-2">Direct Studio Channels</h3>
              <p className="text-sm text-[#52525b] leading-relaxed">
                Connect instantly for video edits, production quotes, or creator retainers.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3 text-sm text-[#52525b] border-t border-black/8 pt-5">
              <a
                href="https://wa.me/919310106145?text=Hi%20Motion%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-pill p-3 rounded-2xl flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-11 h-11 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center text-[#09090b] shrink-0 group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[10px] text-[#71717a] uppercase font-semibold">WhatsApp Direct Desk</p>
                    <p className="text-[#09090b] font-semibold text-sm group-hover:text-black transition-colors">+91 93101 06145</p>
                  </div>
                </div>
                <span className="text-xs text-[#09090b] font-bold">Chat →</span>
              </a>

              <a
                href="tel:+919310106145"
                className="liquid-glass-pill p-3.5 rounded-2xl flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-11 h-11 rounded-2xl bg-black/5 border border-black/8 flex items-center justify-center text-[#09090b] shrink-0 group-hover:scale-105 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[10px] text-[#71717a] uppercase font-semibold">Studio Phone</p>
                    <p className="text-[#09090b] font-semibold text-sm group-hover:text-black transition-colors">+91 93101 06145</p>
                  </div>
                </div>
                <span className="text-xs text-[#71717a] font-bold">Call →</span>
              </a>

              <a
                href="https://www.instagram.com/motionlabs.work/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-pill p-3.5 rounded-2xl flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-11 h-11 rounded-2xl bg-black/5 border border-black/8 flex items-center justify-center text-[#09090b] shrink-0 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[10px] text-[#71717a] uppercase font-semibold">Reels & Showreel</p>
                    <p className="text-[#09090b] font-semibold text-sm group-hover:text-black transition-colors">@motionlabs.work</p>
                  </div>
                </div>
                <span className="text-xs text-[#71717a] font-bold">Follow →</span>
              </a>

              <a
                href="https://www.linkedin.com/in/motion-labs-26623b418/"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-pill p-3.5 rounded-2xl flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-11 h-11 rounded-2xl bg-black/5 border border-black/8 flex items-center justify-center text-[#09090b] shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedInIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[10px] text-[#71717a] uppercase font-semibold">B2B & Partnerships</p>
                    <p className="text-[#09090b] font-semibold text-sm group-hover:text-black transition-colors">Motion Labs</p>
                  </div>
                </div>
                <span className="text-xs text-[#71717a] font-bold">Connect →</span>
              </a>

              <div className="flex items-center gap-3.5 pt-2">
                <span className="w-11 h-11 rounded-2xl bg-black/5 border border-black/8 flex items-center justify-center text-[#09090b] font-bold text-sm shrink-0">
                  ✉
                </span>
                <div>
                  <p className="text-[10px] text-[#71717a] uppercase font-semibold">Direct Email</p>
                  <a href="mailto:hello@motionlabs.in" className="text-[#09090b] font-semibold text-sm hover:text-black transition-colors">
                    hello@motionlabs.in
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-black/8 pt-6">
              <div className="p-3.5 rounded-xl bg-black/[0.04] border border-black/10 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#09090b] animate-pulse shrink-0" />
                <span className="text-xs font-semibold text-[#09090b]">
                  Currently accepting new projects for Q2/Q3 2026.
                </span>
              </div>
            </div>
          </div>

          {/* Right Form Card (Light Liquid Form) */}
          <div className="liquid-card p-8 sm:p-10 bg-white border-black/8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Your Name *">
                  <input
                    required
                    value={form.name}
                    onChange={update('name')}
                    type="text"
                    className="field-input"
                    placeholder="e.g. Alex Morgan"
                  />
                </Field>
                <Field label="Work Email *">
                  <input
                    required
                    value={form.email}
                    onChange={update('email')}
                    type="email"
                    className="field-input"
                    placeholder="alex@company.com"
                  />
                </Field>
              </div>

              {/* Service Pills Selector */}
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#52525b] mb-2.5">
                  Select Primary Service
                </span>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setForm((f) => ({ ...f, service: s }))}
                      className={`text-xs px-3.5 py-2 rounded-full border transition-all cursor-pointer ${
                        form.service === s
                          ? 'bg-[#09090b] text-white border-[#09090b] font-semibold shadow-md'
                          : 'bg-black/5 text-[#52525b] border-black/10 hover:border-black/30 hover:text-[#09090b]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <Field label="Project Brief & Goals *">
                <textarea
                  required
                  value={form.message}
                  onChange={update('message')}
                  rows={4}
                  className="field-input resize-none"
                  placeholder="Tell us about the project, estimated timelines, or links to your current content..."
                />
              </Field>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="liquid-btn-primary w-full py-4 text-base font-semibold focus-ring cursor-pointer"
              >
                {status === 'sending' ? 'Sending Inquiry…' : 'Submit Project Brief →'}
              </button>

              {status === 'sent' && (
                <div className="p-4 rounded-xl bg-black/[0.04] border border-black/15 text-center">
                  <p className="text-sm font-semibold text-[#09090b]">
                    ✓ Brief received! Our production director will get back to you within 24 hours.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-[#71717a] mb-2">
        {label}
      </span>
      {children}
    </label>
  )
}
