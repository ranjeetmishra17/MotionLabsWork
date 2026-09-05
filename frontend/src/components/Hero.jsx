import { motion } from 'framer-motion'
import LiquidBlob from './LiquidBlob'

export default function Hero({ onOpenShowreel }) {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-44 md:pb-32 overflow-hidden bg-[#fbfcf9]">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-50" />

      {/* Centered Ambient Liquid Glowing Aura */}
      <div className="absolute top-1/3 sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[650px] sm:h-[650px] md:w-[850px] md:h-[850px] pointer-events-none opacity-20 filter blur-[90px] sm:blur-[130px]">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#556b2f] via-[#738e42] to-transparent animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      <div className="container relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
        {/* Floating Top Liquid Glass Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill mb-6 sm:mb-8 border border-black/10 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#11140e] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#11140e]">
            Delhi & Global Production Studio
          </span>
          <span className="hidden xs:inline-block text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/5 text-[#11140e] border border-black/15 ml-1">
            2026
          </span>
        </motion.div>

        {/* Monumental Responsive Headline: Strictly Two Lines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.3rem] xl:text-[4.85rem] text-[#0c0f0a] tracking-tight leading-[1.12] max-w-5xl mx-auto px-1 sm:px-0 font-extrabold flex flex-col items-center"
        >
          <span className="block whitespace-normal sm:whitespace-nowrap">We Cut, Shoot & Scale</span>
          <span className="block whitespace-normal sm:whitespace-nowrap">
            <span className="font-playfair italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#556b2f] via-[#6d883e] to-[#455725]">
              Category Defining
            </span>{' '}
            <span className="text-[#0c0f0a]">Brands.</span>
          </span>
        </motion.h1>

        {/* Responsive High-Impact Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-8 sm:mt-12 w-full max-w-xs sm:max-w-none flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 relative z-10"
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
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#151813] text-white text-[10px] sm:text-xs flex items-center justify-center group-hover:bg-[#556b2f] transition-colors">
              ▶
            </span>
            <span>Watch 2026 Showreel</span>
          </button>
        </motion.div>

        {/* Mobile-First Social Proof & Studio Teaser Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 py-2 sm:py-2.5 px-3.5 sm:px-6 rounded-full liquid-glass-pill max-w-md mx-auto relative z-10"
        >
          {/* Overlapping client badge avatars */}
          <div className="flex items-center -space-x-2">
            <span className="w-6 h-6 rounded-full bg-[#556b2f] text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
              NS
            </span>
            <span className="w-6 h-6 rounded-full bg-[#151813] text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
              FB
            </span>
            <span className="w-6 h-6 rounded-full bg-[#6d883e] text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
              BC
            </span>
            <span className="w-6 h-6 rounded-full bg-[#415324] text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
              DT
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#151813]">
            <span className="text-[#556b2f]">★★★★★</span>
            <span>4.9/5 Rating</span>
            <span className="text-black/20 hidden xs:inline">•</span>
            <span className="text-[#565e53] font-normal hidden xs:inline">50M+ Views</span>
          </div>
        </motion.div>
      </div>

      {/* Atmospheric Ambient Liquid Blob Lighting */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[100px] sm:h-[140px] opacity-40 filter blur-[40px] pointer-events-none">
        <LiquidBlob className="w-full h-full" />
      </div>
    </section>
  )
}
