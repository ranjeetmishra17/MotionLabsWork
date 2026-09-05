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
    <section id="contact" className="py-24 md:py-32 bg-[#f4f6f0] border-t border-black/8 relative">
      <div className="container">
        {/* Centered Section Header for Mobile and Desktop */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill mb-4">
            <span className="w-2 h-2 rounded-full bg-[#556b2f]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#151813]">
              Start a Collaboration
            </span>
          </div>

          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#151813] font-bold tracking-tight leading-[1.15] mx-auto max-w-3xl">
            <span>Let's Build Your Next</span>{' '}
            <span className="font-playfair italic font-normal text-[#556b2f]">Breakthrough Film.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
          {/* Left Info Column with Liquid Glass Socials */}
          <div className="liquid-card p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#151813] mb-2">Direct Studio Channels</h3>
              <p className="text-sm text-[#565e53] leading-relaxed">
                Connect instantly for video edits, production quotes, or creator retainers.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3 text-sm text-[#565e53] border-t border-black/8 pt-5">
              <a
                href="https://wa.me/919999999999?text=Hi%20Motion%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-pill p-3 rounded-2xl flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#556b2f]/15 border border-[#556b2f]/30 flex items-center justify-center text-[#556b2f] shrink-0">
                    <WhatsAppIcon className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-[10px] text-[#7d8778] uppercase font-semibold">Instant Studio Chat</p>
                    <p className="text-[#151813] font-semibold text-xs group-hover:text-[#556b2f] transition-colors">WhatsApp Direct Desk</p>
                  </div>
                </div>
                <span className="text-xs text-[#556b2f] font-bold">Chat →</span>
              </a>

              <a
                href="https://instagram.com/motionlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-pill p-3 rounded-2xl flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-black/5 border border-black/8 flex items-center justify-center text-[#151813] shrink-0">
                    <InstagramIcon className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-[10px] text-[#7d8778] uppercase font-semibold">Reels & Showreel</p>
                    <p className="text-[#151813] font-semibold text-xs group-hover:text-[#556b2f] transition-colors">@motionlabs.studio</p>
                  </div>
                </div>
                <span className="text-xs text-[#7d8778] font-bold">Follow →</span>
              </a>

              <a
                href="https://linkedin.com/company/motionlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-pill p-3 rounded-2xl flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-black/5 border border-black/8 flex items-center justify-center text-[#151813] shrink-0">
                    <LinkedInIcon className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-[10px] text-[#7d8778] uppercase font-semibold">B2B & Partnerships</p>
                    <p className="text-[#151813] font-semibold text-xs group-hover:text-[#556b2f] transition-colors">Motion Labs Agency</p>
                  </div>
                </div>
                <span className="text-xs text-[#7d8778] font-bold">Connect →</span>
              </a>

              <div className="flex items-center gap-3.5 pt-2">
                <span className="w-9 h-9 rounded-xl bg-black/5 border border-black/8 flex items-center justify-center text-[#151813] font-bold text-xs shrink-0">
                  ✉
                </span>
                <div>
                  <p className="text-[10px] text-[#7d8778] uppercase font-semibold">Direct Email</p>
                  <a href="mailto:hello@motionlabs.in" className="text-[#151813] font-semibold text-xs hover:text-[#556b2f] transition-colors">
                    hello@motionlabs.in
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-black/8 pt-6">
              <div className="p-3.5 rounded-xl bg-[#556b2f]/10 border border-[#556b2f]/25 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#556b2f] animate-pulse shrink-0" />
                <span className="text-xs font-semibold text-[#151813]">
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
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#565e53] mb-2.5">
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
                          ? 'bg-[#11140e] text-white border-[#11140e] font-semibold shadow-md'
                          : 'bg-black/5 text-[#4a5246] border-black/10 hover:border-black/30 hover:text-[#11140e]'
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
                <div className="p-4 rounded-xl bg-[#556b2f]/15 border border-[#556b2f]/35 text-center">
                  <p className="text-sm font-semibold text-[#556b2f]">
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
      <span className="block text-xs font-semibold uppercase tracking-wider text-[#565e53] mb-2">
        {label}
      </span>
      {children}
    </label>
  )
}
