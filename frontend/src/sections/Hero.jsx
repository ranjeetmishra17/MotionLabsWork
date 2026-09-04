import { motion } from 'framer-motion'
import LiquidBlob from '../components/LiquidBlob'

export default function Hero({ onOpenShowreel }) {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[#08090b]">
      {/* Background Dark Subtle Grid */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-45" />
      
      {/* Centered Ambient Liquid Glowing Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] md:w-[900px] md:h-[900px] pointer-events-none opacity-20 filter blur-[120px]">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#ff5500] via-[#ff7700] to-transparent animate-pulse" style={{ animationDuration: '7s' }} />
      </div>

      <div className="container relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
        {/* Floating Top Liquid Pill Badge (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#14161c]/90 border border-white/10 shadow-lg mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-ping" />
          <span className="text-xs font-semibold uppercase tracking-widest text-white/90">
            Delhi & Global Production Studio
          </span>
        </motion.div>

        {/* Monumental Centered Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="display text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] text-white tracking-tight leading-[1.04] max-w-4xl font-bold"
        >
          <span className="font-playfair italic font-normal text-white/95">We Cut, Shoot &</span>{' '}
          <span className="font-bold tracking-tight">Scale</span>{' '}
          <br className="hidden sm:inline" />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] via-[#ff7700] to-[#ff4400] font-playfair italic font-bold">
            Category-Defining Brands.
          </span>
        </motion.h1>

        {/* Centered Descriptive Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-[#9496a1] leading-relaxed font-normal"
        >
          Motion Labs crafts high-retention video edits, commercial shoots, creator content engines, and custom digital platforms for founders who demand attention.
        </motion.p>

        {/* Centered High-Impact Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="liquid-btn-primary px-8 py-4 text-base font-semibold shadow-2xl focus-ring"
          >
            Start a Project →
          </a>
          <button
            onClick={onOpenShowreel}
            className="liquid-btn-secondary px-7 py-4 text-base font-semibold focus-ring group"
          >
            <span className="w-6 h-6 rounded-full bg-white text-black text-xs flex items-center justify-center group-hover:bg-[#ff5500] group-hover:text-white transition-colors">
              ▶
            </span>
            Watch 2026 Showreel
          </button>
        </motion.div>
      </div>

      {/* Floating Centered Liquid Blob Element for Organic Polish */}
      <div className="max-w-md mx-auto h-20 md:h-28 mt-8 opacity-75">
        <LiquidBlob className="w-full h-full" />
      </div>
    </section>
  )
}
