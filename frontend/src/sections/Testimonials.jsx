import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const REVIEWS = [
  {
    id: 'r1',
    quote:
      'We used to wait two weeks for a single edit. Motion Labs turns around a full week of high-retention Reels before our next shoot is even scheduled. Our customer acquisition cost dropped 38% within 60 days.',
    name: 'Aarav Sharma',
    role: 'Founder & CEO',
    company: 'Nocturne Skincare',
    stat: '4.2x ROAS Surge',
    tag: 'D2C Skincare',
    avatar: 'AS',
  },
  {
    id: 'r2',
    quote:
      'The launch film Motion Labs produced for our electric bike was pure cinema. It set our pre-order record within the first 48 hours of posting and converted cold traffic effortlessly.',
    name: 'Priya Mehta',
    role: 'VP Marketing',
    company: 'Ferro Mobility',
    stat: '2.8M Launch Views',
    tag: 'Clean EV Brand',
    avatar: 'PM',
  },
  {
    id: 'r3',
    quote:
      'They rebuilt our entire social content engine. The visual aesthetic is immaculate, retention is consistently above 70%, and our Instagram engagement rate jumped from 1.2% to 6.8%.',
    name: 'Rohan Gupta',
    role: 'Head of Growth',
    company: 'Baseline Coffee Co.',
    stat: '+180K Community',
    tag: 'Specialty Beverage',
    avatar: 'RG',
  },
  {
    id: 'r4',
    quote:
      'Motion Labs rebuilt our site in three weeks with zero page-builder bloat. It finally loads as fast as it looks and our inbound enterprise conversion rate doubled.',
    name: 'Elena Rostova',
    role: 'Creative Director',
    company: 'Harlow Studio',
    stat: '99 Google PageSpeed',
    tag: 'Flagship Web',
    avatar: 'ER',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#090a0c] border-t border-white/8 relative overflow-hidden">
      {/* Background Subtle Dot Matrix */}
      <div className="absolute inset-0 bg-dots-dark opacity-40 pointer-events-none" />

      <div className="container relative z-10">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181a20] border border-white/10 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/90">
              Client Testimonials & Outcomes
            </span>
          </div>

          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.15] mx-auto max-w-3xl">
            <span className="font-playfair italic font-normal">What Founders &</span>{' '}
            <span className="font-bold">Leaders Say.</span>
          </h2>

          <p className="mt-4 text-base md:text-lg text-[#9ca3af] max-w-xl mx-auto leading-relaxed text-center">
            Real feedback and verified business outcomes from the founders and creators we partner with.
          </p>
        </div>

        {/* Featured Testimonial Spotlight Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={REVIEWS[activeIndex].id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="liquid-card p-8 sm:p-12 bg-[#121418]/90 border-white/10 shadow-2xl relative"
            >
              {/* Subtle Orange Flare */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff5500]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between gap-4 mb-8">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#ff5500] text-white">
                  {REVIEWS[activeIndex].tag}
                </span>
                <span className="text-xs font-bold text-[#ff5500] px-3.5 py-1 rounded-full bg-[#ff5500]/15 border border-[#ff5500]/30">
                  {REVIEWS[activeIndex].stat}
                </span>
              </div>

              <blockquote className="font-playfair text-2xl sm:text-3xl md:text-4xl text-white leading-snug font-normal mb-10">
                "{REVIEWS[activeIndex].quote}"
              </blockquote>

              <div className="flex items-center justify-between border-t border-white/10 pt-6 flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ff5500] text-white flex items-center justify-center font-bold text-sm shadow-md">
                    {REVIEWS[activeIndex].avatar}
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-white">
                      {REVIEWS[activeIndex].name}
                    </h3>
                    <p className="text-xs text-[#9ca3af]">
                      {REVIEWS[activeIndex].role} · {REVIEWS[activeIndex].company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {REVIEWS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`w-3 h-3 rounded-full transition-all focus-ring ${
                        activeIndex === i
                          ? 'bg-[#ff5500] w-8'
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`View testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4 Testimonial Selector Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {REVIEWS.map((r, i) => (
            <button
              key={r.id}
              onClick={() => setActiveIndex(i)}
              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer focus-ring ${
                activeIndex === i
                  ? 'bg-[#181a20] border-[#ff5500] shadow-lg ring-1 ring-[#ff5500]/30'
                  : 'bg-[#111317]/50 border-white/8 hover:bg-[#14161b] hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-white">{r.name}</span>
                <span className="text-[10px] text-[#ff5500] font-bold">{r.stat}</span>
              </div>
              <p className="text-xs text-[#9ca3af] line-clamp-2">
                "{r.quote}"
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
