import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import rajShamaniImg from '../assets/creator-logos/Raj Shamni.webp'
import paytmLogo from '../assets/brand-logos/Paytm.webp'
import thugeshImg from '../assets/creator-logos/Thugesh.webp'
import sriMandirLogo from '../assets/brand-logos/Sri Mandir.webp'

const REVIEWS = [
  {
    id: 'r1',
    quote:
      'Motion Labs turns around high-retention video cuts at lightning speed. The pacing, audio cues, and custom kinetic subtitles are dialed in so well that our retention and viral reach surged immediately.',
    name: 'Raj Shamani',
    role: 'Creator & Host',
    company: 'Figuring Out Podcast',
    stat: '8.4M Views Surge',
    tag: 'Podcast & Content',
    avatar: rajShamaniImg,
    isLogo: false,
  },
  {
    id: 'r2',
    quote:
      'The commercial films and digital creative assets Motion Labs produced elevated our fintech campaigns with incredible polish, slick UI motion, and high conversion.',
    name: 'Marketing Team',
    role: 'Growth & Brand',
    company: 'Paytm',
    stat: '4.8M Commercial Views',
    tag: 'Fintech Commercial',
    avatar: paytmLogo,
    isLogo: true,
  },
  {
    id: 'r3',
    quote:
      'They understand creator comedic rhythm and viral retention like nobody else. Every edit feels fresh, kinetic, and packed with personality.',
    name: 'Thugesh',
    role: 'Creator & Founder',
    company: 'Thugesh (5.5M+)',
    stat: '6.2M Reach',
    tag: 'Entertainment & UGC',
    avatar: thugeshImg,
    isLogo: false,
  },
  {
    id: 'r4',
    quote:
      'Our devotional Puja Seva films required deep cultural authenticity combined with modern cinematic color grading. Motion Labs delivered beyond expectations.',
    name: 'Devotional Growth',
    role: 'Product Lead',
    company: 'Sri Mandir App',
    stat: '10M+ Devotees',
    tag: 'Culture & Devotion',
    avatar: sriMandirLogo,
    isLogo: false,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#fafafb] border-t border-black/8 relative overflow-hidden">
      {/* Background Subtle Dot Matrix */}
      <div className="absolute inset-0 bg-dots-dark opacity-35 pointer-events-none" />

      <div className="container relative z-10">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill mb-4">
            <span className="w-2 h-2 rounded-full bg-[#09090b]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#09090b]">
              Client Testimonials & Outcomes
            </span>
          </div>

          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#09090b] font-bold tracking-tight leading-[1.15] mx-auto max-w-3xl">
            <span>What Founders &</span>{' '}
            <span className="font-playfair italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#18181b] via-[#52525b] to-[#09090b]">
              Leaders Say.
            </span>
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
              {/* Subtle Monochrome Flare */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-black/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between gap-4 mb-8">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#09090b] text-white shadow-sm">
                  {REVIEWS[activeIndex].tag}
                </span>
                <span className="text-xs font-bold text-[#09090b] px-3.5 py-1 rounded-full bg-black/5 border border-black/15">
                  {REVIEWS[activeIndex].stat}
                </span>
              </div>

              <blockquote className="text-lg sm:text-2xl text-[#09090b] font-medium leading-relaxed mb-8 italic">
                "{REVIEWS[activeIndex].quote}"
              </blockquote>

              <div className="flex items-center justify-between gap-4 border-t border-black/8 pt-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white text-white font-bold text-sm flex items-center justify-center shadow-md border border-black/10 overflow-hidden shrink-0">
                    <img
                      src={REVIEWS[activeIndex].avatar}
                      alt={REVIEWS[activeIndex].name}
                      className={`w-full h-full object-cover ${REVIEWS[activeIndex].isLogo ? 'object-contain p-1.5 bg-white' : ''}`}
                    />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-[#09090b] text-base">
                      {REVIEWS[activeIndex].name}
                    </h3>
                    <p className="text-xs text-[#71717a]">
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
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        activeIndex === i
                          ? 'w-8 bg-[#09090b]'
                          : 'w-2.5 bg-black/15 hover:bg-black/35'
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
                <div className="flex items-center gap-2">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className={`w-5 h-5 rounded-full object-cover border border-black/10 shrink-0 ${r.isLogo ? 'object-contain bg-white p-0.5' : ''}`}
                  />
                  <span className="text-xs font-bold text-[#09090b]">{r.name}</span>
                </div>
                <span className="text-[10px] text-[#09090b] font-bold">{r.stat}</span>
              </div>
              <p className="text-xs text-[#71717a] line-clamp-2">
                "{r.quote}"
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
