import { motion } from 'framer-motion'
import LiquidBlob from './LiquidBlob'
import heroBg from '../assets/hero-bg.png'
import heroBgMobile from '../assets/hero-bg-mobile.png'

export default function Hero({ onOpenShowreel }) {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-44 md:pb-32 overflow-hidden bg-[#fafafb]">
      {/* Cinematic Studio Photography Background Layer (Responsive Mobile & Desktop) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Mobile View Background: explicit absolute inset-0 ensuring full bottom coverage */}
        <img
          src={heroBgMobile}
          alt="Motion Labs Cinematic Studio"
          className="md:hidden absolute inset-0 w-full h-full object-cover object-bottom opacity-80 filter contrast-[1.05] brightness-[0.95]"
          loading="eager"
          fetchPriority="high"
        />
        {/* Desktop / Tablet View Background */}
        <img
          src={heroBg}
          alt="Motion Labs Cinematic Studio"
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-center opacity-80 filter contrast-[1.05] brightness-[0.95]"
          loading="eager"
          fetchPriority="high"
        />

        {/* Delicate Scrim for Balanced Depth */}
        <div className="absolute inset-0 bg-black/6 sm:bg-black/8" />

        {/* Soft Center Feathering for Clean Light Balance */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_45%,rgba(250,250,251,0.55)_0%,rgba(250,250,251,0.18)_65%,transparent_100%)]" />

        {/* Seamless Soft Edge Fades: very gentle at the bottom edge so photo is visible throughout */}
        <div className="absolute inset-x-0 bottom-0 h-10 sm:h-20 md:h-28 bg-gradient-to-t from-[#fafafb] via-[#fafafb]/40 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#fafafb]/60 to-transparent" />
      </div>

      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-25" />

      {/* Centered Ambient Liquid Glowing Aura in Monochrome */}
      <div className="absolute top-1/3 sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[650px] sm:h-[650px] md:w-[850px] md:h-[850px] pointer-events-none opacity-10 filter blur-[90px] sm:blur-[130px]">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-black/20 via-black/10 to-transparent animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      <div className="container relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
        {/* Floating Top Liquid Glass Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill mb-6 sm:mb-8 border border-black/10 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#09090b] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#09090b]">
            Delhi & Global Production Studio
          </span>
          <span className="hidden xs:inline-block text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/5 text-[#09090b] border border-black/15 ml-1">
            2026
          </span>
        </motion.div>

        {/* Monumental Responsive Headline: Strictly Two Lines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.3rem] xl:text-[4.85rem] text-[#09090b] tracking-tight leading-[1.12] max-w-5xl mx-auto px-1 sm:px-0 font-extrabold flex flex-col items-center"
        >
          <span className="block whitespace-normal sm:whitespace-nowrap">We Cut, Shoot & Scale</span>
          <span className="block whitespace-normal sm:whitespace-nowrap">
            <span className="font-playfair italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#09090b] via-[#52525b] to-[#18181b]">
              Category Defining
            </span>{' '}
            <span className="text-[#09090b]">Brands.</span>
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
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#09090b] text-white text-[10px] sm:text-xs flex items-center justify-center border border-white/20 group-hover:bg-black group-hover:scale-110 transition-all shadow-md">
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
          {/* Overlapping client badge avatars in luxury monochrome shades */}
          <div className="flex items-center -space-x-2">
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-neutral-800 to-black text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
              NS
            </span>
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
              FB
            </span>
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-neutral-600 to-neutral-800 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
              BC
            </span>
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-950 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
              DT
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#09090b]">
            <span className="text-[#09090b] tracking-wider">★★★★★</span>
            <span>4.9/5 Rating</span>
            <span className="text-black/20 hidden xs:inline">•</span>
            <span className="text-[#71717a] font-normal hidden xs:inline">50M+ Views</span>
          </div>
        </motion.div>
      </div>

      {/* Atmospheric Ambient Liquid Blob Lighting */}
      <div className="hidden md:block absolute -bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[140px] opacity-25 filter blur-[40px] pointer-events-none">
        <LiquidBlob className="w-full h-full" />
      </div>
    </section>
  )
}
