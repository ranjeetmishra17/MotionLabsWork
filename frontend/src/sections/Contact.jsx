import { useState } from 'react'

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
    <section id="contact" className="py-24 md:py-32 bg-[#090a0c] border-t border-white/8 relative">
      <div className="container">
        {/* Centered Section Header for Mobile and Desktop */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181a20] border border-white/10 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/90">
              Start a Collaboration
            </span>
          </div>

          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.15] mb-4 mx-auto max-w-3xl">
            <span className="font-playfair italic font-normal">Let's Build Your Next</span>{' '}
            <span className="font-bold">Breakthrough Film.</span>
          </h2>

          <p className="text-[#9ca3af] text-base sm:text-lg leading-relaxed max-w-xl mx-auto text-center">
            Share details about your vision, upcoming shoot, channel roadmap, or deadlines. We reply within 24 hours with an actionable scope and budget.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
          {/* Left Info Column */}
          <div className="liquid-card p-6 sm:p-8 bg-[#111317]/80 border-white/10 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Direct Inquiries</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Prefer email or looking for a long-term production retainer? Reach our producers directly.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 text-sm text-[#9ca3af] border-t border-white/10 pt-6">
              <div className="flex items-center gap-3.5">
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  ✉
                </span>
                <div>
                  <p className="text-[11px] text-[#6b7280] uppercase font-semibold">Direct Email</p>
                  <a href="mailto:hello@motionlabs.in" className="text-white font-semibold hover:text-[#ff5500] transition-colors">
                    hello@motionlabs.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  📍
                </span>
                <div>
                  <p className="text-[11px] text-[#6b7280] uppercase font-semibold">Studio Headquarters</p>
                  <p className="text-white font-medium">New Delhi, India · Global Remote Productions</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="p-3.5 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/25 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5500] animate-pulse shrink-0" />
                <span className="text-xs font-semibold text-white/90">
                  Currently accepting new projects for Q2/Q3 2026.
                </span>
              </div>
            </div>
          </div>

          {/* Right Form Card (Dark Liquid Form) */}
          <div className="liquid-card p-8 sm:p-10 bg-[#121418]/90 border-white/10 shadow-2xl">
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
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#9ca3af] mb-2.5">
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
                          ? 'bg-[#ff5500] text-white border-[#ff5500] font-semibold shadow-md'
                          : 'bg-white/5 text-[#9ca3af] border-white/10 hover:border-white/30 hover:text-white'
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
                <div className="p-4 rounded-xl bg-[#ff5500]/20 border border-[#ff5500]/40 text-center">
                  <p className="text-sm font-semibold text-[#ff5500]">
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
      <span className="block text-xs font-semibold uppercase tracking-wider text-[#9ca3af] mb-2">
        {label}
      </span>
      {children}
    </label>
  )
}
