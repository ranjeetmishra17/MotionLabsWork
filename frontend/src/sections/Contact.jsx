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
    <section id="contact" className="py-24 md:py-32 bg-[#f4f6f0] border-t border-black/8 relative">
      <div className="container">
        {/* Centered Section Header for Mobile and Desktop */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/8 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#556b2f]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#151813]">
              Start a Collaboration
            </span>
          </div>

          <h2 className="font-playfair text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#151813] tracking-tight leading-[1.15] mx-auto max-w-3xl font-normal">
            <span className="italic">Let's Build Your Next</span>{' '}
            <span className="font-semibold">Breakthrough Film.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
          {/* Left Info Column */}
          <div className="liquid-card p-6 sm:p-8 bg-white/90 border-black/8 shadow-md space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#151813] mb-2">Direct Inquiries</h3>
              <p className="text-sm text-[#565e53] leading-relaxed">
                Prefer email or looking for a long-term production retainer? Reach our producers directly.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 text-sm text-[#565e53] border-t border-black/8 pt-6">
              <div className="flex items-center gap-3.5">
                <span className="w-10 h-10 rounded-xl bg-black/5 border border-black/8 flex items-center justify-center text-[#151813] font-bold text-sm shrink-0">
                  ✉
                </span>
                <div>
                  <p className="text-[11px] text-[#7d8778] uppercase font-semibold">Direct Email</p>
                  <a href="mailto:hello@motionlabs.in" className="text-[#151813] font-semibold hover:text-[#556b2f] transition-colors">
                    hello@motionlabs.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <span className="w-10 h-10 rounded-xl bg-black/5 border border-black/8 flex items-center justify-center text-[#151813] font-bold text-sm shrink-0">
                  📍
                </span>
                <div>
                  <p className="text-[11px] text-[#7d8778] uppercase font-semibold">Studio Headquarters</p>
                  <p className="text-[#151813] font-medium">New Delhi, India · Global Remote Productions</p>
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
                          ? 'bg-[#556b2f] text-white border-[#556b2f] font-semibold shadow-sm'
                          : 'bg-black/4 text-[#565e53] border-black/8 hover:border-[#556b2f]/40 hover:text-[#151813]'
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
