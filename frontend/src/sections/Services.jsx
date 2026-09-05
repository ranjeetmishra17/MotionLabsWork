import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SERVICES = [
  {
    n: '01',
    name: 'High-Retention Video Editing',
    blurb:
      'Long-form YouTube storytelling and viral short-form cuts paced for maximum audience retention. Includes custom sound design, color grading, motion graphics, and narrative pacing.',
    tags: ['Color grading', 'Sound design', 'Motion graphics', 'YouTube & Ads'],
    metric: '65%+ Avg Retention',
  },
  {
    n: '02',
    name: 'Commercial & Brand Shoots',
    blurb:
      'Full-scale on-location or studio cinematography for lifestyle, consumer, and brand launch films. Directed with shot lists optimized for dynamic post-production turnarounds.',
    tags: ['4K Direction', 'Multi-camera', 'Cinematic Lighting', 'High-speed'],
    metric: 'Cinema-Grade 4K',
  },
  {
    n: '03',
    name: 'D2C Product Cinematography',
    blurb:
      'Pristine, catalog-ready 4K macro product video and high-converting creative assets for e-commerce, Amazon, and performance marketing campaigns.',
    tags: ['Studio Turntable', 'Macro Details', 'Packshots', 'Ad Variants'],
    metric: '3.8x Avg Ad ROAS',
  },
  {
    n: '04',
    name: 'Short-Form UGC & Creator Content',
    blurb:
      'Organic-feeling, scroll-stopping vertical videos built specifically for Reels, TikTok, and YouTube Shorts that convert viewers into loyal customers.',
    tags: ['Reels & Shorts', 'Hook Writing', 'Creator Briefs', 'Trend Cadence'],
    metric: '5M+ Views / Month',
  },
  {
    n: '05',
    name: 'Social Media Growth Management',
    blurb:
      'End-to-end publishing cadence, analytics monitoring, thumbnail strategy, and community engagement to ensure channel compounding between shoots.',
    tags: ['Content Calendar', 'A/B Thumbnails', 'Analytics', 'Growth Strategy'],
    metric: 'Daily Optimization',
  },
  {
    n: '06',
    name: 'Custom Web Development',
    blurb:
      'Ultra-fast, bespoke websites built with modern React, Next.js, and fluid liquid micro-interactions designed to elevate brand authority and drive inquiries.',
    tags: ['React & Next.js', 'Smooth Motion', 'SEO Dominance', 'Zero Bloat'],
    metric: '99+ PageSpeed',
  },
]

export default function Services() {
  const [open, setOpen] = useState(0)

  return (
    <section id="services" className="py-24 md:py-32 bg-[#fbfcf9] border-t border-black/8 relative">
      <div className="container">
        {/* Centered Header for Mobile and Desktop */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill mb-4">
            <span className="w-2 h-2 rounded-full bg-[#556b2f]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#151813]">
              Studio Capabilities
            </span>
          </div>
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#151813] font-bold tracking-tight leading-[1.15] mx-auto max-w-3xl">
            <span>Six Specialized Disciplines.</span>{' '}
            <span className="font-playfair italic font-normal text-[#556b2f]">One Team.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {SERVICES.map((s, i) => {
            const isOpen = open === i
            return (
              <div
                key={s.name}
                className={`liquid-card transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#556b2f]/60 shadow-2xl ring-1 ring-[#556b2f]/25'
                    : 'hover:border-white'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 p-6 sm:p-8 text-left focus-ring cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-5 sm:gap-8">
                    <span className="text-base sm:text-lg text-[#11140e] font-mono font-bold">
                      {s.n}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#11140e]">
                      {s.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="hidden sm:inline-block text-xs font-semibold px-3 py-1 rounded-full bg-black/5 text-[#11140e] border border-black/15">
                      {s.metric}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold transition-all ${
                        isOpen
                          ? 'bg-[#11140e] text-white border-[#11140e]'
                          : 'border-black/20 text-[#11140e] bg-black/5 hover:border-black/50'
                      }`}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-0 grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-end border-t border-black/8 mt-2 pt-6">
                        <p className="text-sm sm:text-base text-[#565e53] leading-relaxed">
                          {s.blurb}
                        </p>
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          {s.tags.map((t) => (
                            <span
                              key={t}
                              className="text-xs font-medium px-3 py-1 rounded-full liquid-glass-pill text-[#151813]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
