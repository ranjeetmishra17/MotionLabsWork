import { motion } from 'framer-motion'
import LiquidBlob from '../components/LiquidBlob'

export default function Hero({ onOpenShowreel }) {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-44 md:pb-32 overflow-hidden bg-[#08090b]">
      {/* Background Dark Subtle Grid */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-40" />
      
      {/* Centered Ambient Liquid Glowing Aura */}
      <div className="absolute top-1/3 sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[650px] sm:h-[650px] md:w-[850px] md:h-[850px] pointer-events-none opacity-25 filter blur-[90px] sm:blur-[130px]">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#ff5500] via-[#ff7700] to-transparent animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      <div className="container relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
        {/* Floating Top Liquid Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12141a]/90 border border-white/12 shadow-lg mb-6 sm:mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-ping" />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/90">
            Delhi & Global Production Studio
          </span>
          <span className="hidden xs:inline-block text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30 ml-1">
            2026
          </span>
        </motion.div>

        {/* Monumental Responsive Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="display text-2xl sm:text-4xl md:text-5xl lg:text-[4.5rem] text-white tracking-tight leading-[1.2] sm:leading-[1.12] max-w-4xl mx-auto font-bold px-1 sm:px-0"
        >
          <span className="font-playfair italic font-normal text-white/95">We Cut, Shoot & Scale</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] via-[#ff7700] to-[#ff4400] font-playfair italic font-bold">
            Category-Defining
          </span>{' '}
          <span className="font-bold tracking-tight">Brands.</span>
        </motion.h1>

        {/* Centered Descriptive Subtext with Key Highlights */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 sm:mt-8 max-w-2xl text-[15px] sm:text-lg md:text-xl text-[#9496a1] leading-relaxed font-normal px-2 sm:px-0"
        >
          Motion Labs crafts <span className="text-white font-medium">high-retention video edits</span>, <span className="text-white font-medium">commercial shoots</span>, creator content engines, and custom digital platforms for founders who demand attention.
        </motion.p>

        {/* Responsive High-Impact Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-8 sm:mt-10 w-full max-w-xs sm:max-w-none flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 relative z-10"
        >
          <a
            href="#contact"
            className="liquid-btn-primary py-4 px-8 text-base font-bold shadow-2xl focus-ring text-center"
          >
            Start a Project →
          </a>
          <button
            onClick={onOpenShowreel}
            className="liquid-btn-secondary py-3.5 px-6 sm:py-4 sm:px-7 text-sm sm:text-base font-semibold focus-ring group flex items-center justify-center gap-2.5"
          >
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-black text-[10px] sm:text-xs flex items-center justify-center group-hover:bg-[#ff5500] group-hover:text-white transition-colors">
              ▶
            </span>
            <span>Watch 2026 Showreel</span>
            <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-white/10 text-white/70 ml-1">
              01:15
            </span>
          </button>
        </motion.div>

        {/* Mobile-First Social Proof & Studio Teaser Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-6 py-2.5 px-4 sm:px-6 rounded-full bg-[#111317]/90 border border-white/12 backdrop-blur-xl shadow-2xl max-w-md mx-auto relative z-10"
        >
          {/* Overlapping client badge avatars */}
          <div className="flex items-center -space-x-2">
            <span className="w-6 h-6 rounded-full bg-[#ff5500] text-white text-[9px] font-bold flex items-center justify-center border-2 border-[#08090b]">
              NS
            </span>
            <span className="w-6 h-6 rounded-full bg-white text-black text-[9px] font-bold flex items-center justify-center border-2 border-[#08090b]">
              FB
            </span>
            <span className="w-6 h-6 rounded-full bg-[#ff7700] text-white text-[9px] font-bold flex items-center justify-center border-2 border-[#08090b]">
              BC
            </span>
            <span className="w-6 h-6 rounded-full bg-[#20242b] text-white text-[9px] font-bold flex items-center justify-center border-2 border-[#08090b]">
              DT
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
            <span className="text-[#ff5500]">★★★★★</span>
            <span>4.9/5 Rating</span>
            <span className="text-white/30 hidden xs:inline">•</span>
            <span className="text-[#9496a1] font-normal hidden xs:inline">50M+ Views</span>
          </div>

          <button
            onClick={onOpenShowreel}
            className="text-[11px] font-bold text-[#ff5500] hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>Play Reel</span>
            <span>▶</span>
          </button>
        </motion.div>
      </div>

      {/* Atmospheric Ambient Liquid Blob Lighting */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[100px] sm:h-[140px] opacity-40 filter blur-[40px] pointer-events-none">
        <LiquidBlob className="w-full h-full" />
      </div>
    </section>
  )
}
