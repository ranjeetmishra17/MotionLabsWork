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
    <section id="testimonials" className="py-24 md:py-32 bg-[#fbfcf9] border-t border-black/8 relative overflow-hidden">
      {/* Background Subtle Dot Matrix */}
      <div className="absolute inset-0 bg-dots-dark opacity-50 pointer-events-none" />

      <div className="container relative z-10">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill mb-4">
            <span className="w-2 h-2 rounded-full bg-[#556b2f]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#151813]">
              Client Testimonials & Outcomes
            </span>
          </div>

          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#151813] font-bold tracking-tight leading-[1.15] mx-auto max-w-3xl">
            <span>What Founders &</span>{' '}
            <span className="font-playfair italic font-normal text-[#556b2f]">Leaders Say.</span>
          </h2>
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
              className="liquid-card p-8 sm:p-12 shadow-2xl relative"
            >
              {/* Subtle Olive Flare */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#556b2f]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between gap-4 mb-8">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#11140e] text-white shadow-sm">
                  {REVIEWS[activeIndex].tag}
                </span>
                <span className="text-xs font-bold text-[#11140e] px-3.5 py-1 rounded-full bg-black/5 border border-black/15">
                  {REVIEWS[activeIndex].stat}
                </span>
              </div>

              <blockquote className="text-lg sm:text-2xl text-[#11140e] font-medium leading-relaxed mb-8 italic">
                "{REVIEWS[activeIndex].quote}"
              </blockquote>

              <div className="flex items-center justify-between gap-4 border-t border-black/8 pt-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#11140e] text-white font-bold text-sm flex items-center justify-center shadow-md border border-black/20">
                    {REVIEWS[activeIndex].avatar}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-[#11140e] text-base">
                      {REVIEWS[activeIndex].name}
                    </h3>
                    <p className="text-xs text-[#565e53]">
                      {REVIEWS[activeIndex].role}, {REVIEWS[activeIndex].company}
                    </p>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex items-center gap-2">
                  {REVIEWS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                        activeIndex === i
                          ? 'w-8 bg-[#11140e]'
                          : 'bg-black/15 hover:bg-black/30'
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
              className={`p-5 rounded-2xl transition-all cursor-pointer focus-ring text-left ${
                activeIndex === i
                  ? 'liquid-card border-black/40 shadow-xl ring-1 ring-black/20'
                  : 'liquid-glass-pill hover:border-black/30'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#151813]">{r.name}</span>
                <span className="text-[10px] text-[#556b2f] font-bold">{r.stat}</span>
              </div>
              <p className="text-xs text-[#565e53] line-clamp-2">
                "{r.quote}"
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
