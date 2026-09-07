import { useState } from 'react'

// Brand Logos
import equalAiLogo from '../assets/brand-logos/Equal AI.webp'
import paytmLogo from '../assets/brand-logos/Paytm.webp'
import sriMandirLogo from '../assets/brand-logos/Sri Mandir.webp'
import starttLogo from '../assets/brand-logos/Startt.webp'

// Creator Logos & Avatars
import dearSirImg from '../assets/creator-logos/Dear Sir.webp'
import nakulMehtaImg from '../assets/creator-logos/Nakul Mehta.webp'
import rajShamaniImg from '../assets/creator-logos/Raj Shamni.webp'
import thugeshImg from '../assets/creator-logos/Thugesh.webp'

// Studio Core Logo
import logoWhite from '../assets/White Without BG.png'

const BRANDS = [
  {
    id: 'b1',
    name: 'Paytm',
    category: 'Fintech & Digital Payments',
    stat: '450M+ Users',
    image: paytmLogo,
    isLogoWithPadding: true,
    ring: 1,
    angle: 0,
    video: {
      id: 'brand-paytm',
      title: 'Paytm — High-Velocity Commercial Campaign',
      category: 'Commercial Ad · 4K Color Grade',
      duration: '0:45',
      creator: 'Paytm Commercial Production',
      stats: '4.8M Views · 3.2x CTR',
      bgGradient: 'radial-gradient(circle at 40% 40%, #002e6e, #001538 80%)',
      description: 'Dynamic commercial cuts, UI motion graphics, and high-impact kinetic typography for India’s leading payments giant.',
    },
  },
  {
    id: 'b2',
    name: 'Sri Mandir',
    category: 'Devotional & Cultural App',
    stat: '10M+ Devotees',
    image: sriMandirLogo,
    isLogoWithPadding: false,
    ring: 2,
    angle: 90,
    video: {
      id: 'brand-srimandir',
      title: 'Sri Mandir — Puja Seva Cinematic Story',
      category: 'Brand Film · Commercial Shoot',
      duration: '1:10',
      creator: 'Sri Mandir Puja Seva',
      stats: '6.4M Views · Viral Reach',
      bgGradient: 'radial-gradient(circle at 50% 50%, #d97706, #78350f 85%)',
      description: 'Soulful cinematography, rich warm color tones, and heartfelt storytelling driving community trust and app installations.',
    },
  },
  {
    id: 'b3',
    name: 'Equal AI',
    category: 'AI & Identity Infrastructure',
    stat: 'Enterprise Tech',
    image: equalAiLogo,
    isLogoWithPadding: false,
    ring: 1,
    angle: 180,
    video: {
      id: 'brand-equalai',
      title: 'Equal AI — Next-Gen Data & Identity Tech',
      category: 'Tech Brand Film · 3D Motion UI',
      duration: '0:35',
      creator: 'Equal AI Infrastructure',
      stats: '1.2M Reach · Enterprise B2B',
      bgGradient: 'radial-gradient(circle at 40% 40%, #15803d, #052e16 80%)',
      description: 'Precision motion UI, 3D data flows, and modern kinetic product explainers for high-converting B2B adoption.',
    },
  },
  {
    id: 'b4',
    name: 'Startt',
    category: 'Creator Commerce Platform',
    stat: 'Global Launch',
    image: starttLogo,
    isLogoWithPadding: false,
    ring: 2,
    angle: 270,
    video: {
      id: 'brand-startt',
      title: 'Startt — The Future of Digital Platforms',
      category: 'Viral Launch Film · Kinetic Cut',
      duration: '0:50',
      creator: 'Startt Ecosystem',
      stats: '2.1M Views · 14K Shares',
      bgGradient: 'radial-gradient(circle at 50% 50%, #eab308, #1c1917 80%)',
      description: 'Energetic camera ramping, punchy sound design, and vibrant visual effects tailored for tech-forward audiences.',
    },
  },
]

const CREATORS = [
  {
    id: 'c1',
    name: 'Raj Shamani',
    handle: '@rajshamani',
    stats: 'Figuring Out · 5M+ Subs',
    category: 'Podcast & Business',
    image: rajShamaniImg,
    ring: 1,
    angle: 0,
    video: {
      id: 'creator-rajshamani',
      title: 'Raj Shamani — Figuring Out Podcast Viral Cut',
      category: 'High-Retention Podcast & Reel Edit',
      duration: '1:00',
      creator: 'Raj Shamani (5M+ Followers)',
      stats: '8.4M Views · 240K Shares',
      bgGradient: 'radial-gradient(circle at 50% 40%, #451a03, #09090b 80%)',
      description: 'High-retention talking-head pacing, custom kinetic graphics, subtitle animations, and punchy audio mastering.',
    },
  },
  {
    id: 'c2',
    name: 'Thugesh',
    handle: '@thugesh',
    stats: '5.5M+ Subscribers',
    category: 'Entertainment & Comedy',
    image: thugeshImg,
    ring: 2,
    angle: 90,
    video: {
      id: 'creator-thugesh',
      title: 'Thugesh — Viral Commentary & Sketch Reel',
      category: 'Viral YouTube & Reel Edit',
      duration: '0:45',
      creator: 'Thugesh (5.5M+ Subs)',
      stats: '6.2M Views · High Retention',
      bgGradient: 'radial-gradient(circle at 50% 50%, #ca8a04, #1c1917 80%)',
      description: 'Fast-paced comedic rhythm, sound effects library timing, dynamic zoom-cuts, and meme integration.',
    },
  },
  {
    id: 'c3',
    name: 'Dear Sir',
    handle: '@dearsir',
    stats: '17M+ Subscribers',
    category: 'EdTech & Learning',
    image: dearSirImg,
    ring: 1,
    angle: 180,
    video: {
      id: 'creator-dearsir',
      title: 'Dear Sir — India’s #1 Educational Concept Reel',
      category: 'Visual Concept Edit & Hooks',
      duration: '0:50',
      creator: 'Dear Sir (17M+ Subs)',
      stats: '12M+ Views · 500K Likes',
      bgGradient: 'radial-gradient(circle at 40% 40%, #065f46, #022c22 80%)',
      description: 'Engaging educational visual breakdown, whiteboard kinetic sync, and crystal clear retention hooks.',
    },
  },
  {
    id: 'c4',
    name: 'Nakuul Mehta',
    handle: '@nakuulmehta',
    stats: '3M+ Across Platforms',
    category: 'Actor & Lifestyle',
    image: nakulMehtaImg,
    ring: 2,
    angle: 270,
    video: {
      id: 'creator-nakulmehta',
      title: 'Nakuul Mehta — Cinematic Poetry & Lifestyle Reel',
      category: 'Cinematic Lifestyle & Ad',
      duration: '1:15',
      creator: 'Nakuul Mehta (3M+ Followers)',
      stats: '3.8M Views · 8.2% Engagement',
      bgGradient: 'radial-gradient(circle at 40% 40%, #1e1b4b, #09090b 80%)',
      description: 'Poetic pacing, bespoke color grading, warm ambient score, and intimate cinematic portraiture.',
    },
  },
]

export default function Orbits({ onPlayVideo }) {
  const [isBrandsPaused, setIsBrandsPaused] = useState(false)
  const [isCreatorsPaused, setIsCreatorsPaused] = useState(false)

  return (
    <section id="clients" className="py-24 md:py-32 bg-[#fafafb] relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dots-dark opacity-35 pointer-events-none" />

      <div className="container relative z-10">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill mb-5">
            <span className="w-2 h-2 rounded-full bg-[#09090b] animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#09090b]">
              Interactive Ecosystem
            </span>
          </div>

          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#09090b] font-bold tracking-tight leading-[1.15] mx-auto max-w-3xl">
            <span>Brands & Creators</span>{' '}
            <span className="font-playfair italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#18181b] via-[#52525b] to-[#09090b]">
              in Orbit.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[#71717a] mt-4 font-medium">
            Hover to pause rotation · Click any node to play production showcase
          </p>
        </div>

        {/* Side-by-Side Orbits Grid: Brands on Left, Creators on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {/* 1. Brands Orbit Card */}
          <div className="liquid-card p-6 sm:p-8 flex flex-col items-center justify-between relative overflow-hidden group">
            {/* Card Top Label */}
            <div className="w-full flex items-center justify-between pb-4 mb-2 border-b border-black/8">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#09090b] shadow-sm" />
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-[#09090b]">
                  Brands in Orbit
                </h3>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-[#52525b] bg-black/5 px-2.5 py-1 rounded-full border border-black/10 uppercase tracking-wider">
                4 Client Partners
              </span>
            </div>

            {/* Orbit Container */}
            <div
              className={`relative aspect-square max-w-[340px] sm:max-w-[420px] md:max-w-[460px] mx-auto w-full flex items-center justify-center p-2 sm:p-4 my-4 ${
                isBrandsPaused ? 'orbit-paused' : ''
              }`}
              onMouseEnter={() => setIsBrandsPaused(true)}
              onMouseLeave={() => setIsBrandsPaused(false)}
            >
              {/* Center Core: Motion Labs Studio Core Logo */}
              <div
                className="relative z-20 w-22 h-22 sm:w-26 sm:h-26 md:w-28 md:h-28 rounded-full metallic-core text-white flex items-center justify-center p-3 sm:p-4 text-center shadow-2xl border border-white/20 select-none group"
              >
                {/* Concentric subtle groove */}
                <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full border border-white/15 pointer-events-none" />
                <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse pointer-events-none" />

                {/* Motion Labs Logo */}
                <img
                  src={logoWhite}
                  alt="Motion Labs"
                  className="w-16 sm:w-20 md:w-22 h-auto object-contain opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]"
                />
              </div>

              {/* Orbit Ring 1 (Inner Track - Fine Silver Dashed) */}
              <div className="absolute w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[270px] md:h-[270px] rounded-full border border-dashed border-zinc-400/50 pointer-events-none animate-orbit-1">
                {BRANDS.filter((b) => b.ring === 1).map((b) => (
                  <OrbitNode
                    key={b.id}
                    item={b}
                    counterClass="counter-orbit-1"
                    onClick={() => onPlayVideo(b.video)}
                  />
                ))}
              </div>

              {/* Orbit Ring 2 (Outer Track - Titanium Dashed) */}
              <div className="absolute w-[280px] h-[280px] sm:w-[370px] sm:h-[370px] md:w-[410px] md:h-[410px] rounded-full border border-dashed border-zinc-600/35 pointer-events-none animate-orbit-2">
                {BRANDS.filter((b) => b.ring === 2).map((b) => (
                  <OrbitNode
                    key={b.id}
                    item={b}
                    counterClass="counter-orbit-2"
                    onClick={() => onPlayVideo(b.video)}
                  />
                ))}
              </div>
            </div>

            {/* All 4 Partner Logos Quick Row */}
            <div className="w-full pt-3 mt-2 border-t border-black/8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {BRANDS.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => onPlayVideo(b.video)}
                    className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-black/5 transition-all cursor-pointer group text-left border border-transparent hover:border-black/10"
                    title={`Play ${b.name} showcase`}
                  >
                    <img
                      src={b.image}
                      alt={b.name}
                      className={`w-6 h-6 rounded-full object-cover border border-black/10 shrink-0 ${b.isLogoWithPadding ? 'object-contain p-0.5 bg-white' : ''}`}
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#09090b] truncate">{b.name}</p>
                      <p className="text-[10px] text-[#71717a] truncate">{b.stat}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Card Footer Status Indicator */}
            <div className="w-full pt-3 mt-2 flex items-center justify-between border-t border-black/8 text-[11px] text-[#71717a]">
              <span className="font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#09090b]" />
                {isBrandsPaused ? '⏸ Orbit Paused' : '⚡ Interactive Rotation'}
              </span>
              <span className="font-semibold text-[#09090b] hover:underline cursor-pointer">Tap node to play ▶</span>
            </div>
          </div>

          {/* 2. Creators Orbit Card */}
          <div className="liquid-card p-6 sm:p-8 flex flex-col items-center justify-between relative overflow-hidden group">
            {/* Card Top Label */}
            <div className="w-full flex items-center justify-between pb-4 mb-2 border-b border-black/8">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#09090b] shadow-sm" />
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-[#09090b]">
                  Creators in Orbit
                </h3>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-[#52525b] bg-black/5 px-2.5 py-1 rounded-full border border-black/10 uppercase tracking-wider">
                4 Channel Partners
              </span>
            </div>

            {/* Orbit Container */}
            <div
              className={`relative aspect-square max-w-[340px] sm:max-w-[420px] md:max-w-[460px] mx-auto w-full flex items-center justify-center p-2 sm:p-4 my-4 ${
                isCreatorsPaused ? 'orbit-paused' : ''
              }`}
              onMouseEnter={() => setIsCreatorsPaused(true)}
              onMouseLeave={() => setIsCreatorsPaused(false)}
            >
              {/* Center Core: Motion Labs Studio Core Logo */}
              <div
                className="relative z-20 w-22 h-22 sm:w-26 sm:h-26 md:w-28 md:h-28 rounded-full metallic-core text-white flex items-center justify-center p-3 sm:p-4 text-center shadow-2xl border border-white/20 select-none group"
              >
                {/* Concentric subtle groove */}
                <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full border border-white/15 pointer-events-none" />
                <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse pointer-events-none" />

                {/* Motion Labs Logo */}
                <img
                  src={logoWhite}
                  alt="Motion Labs"
                  className="w-16 sm:w-20 md:w-22 h-auto object-contain opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]"
                />
              </div>

              {/* Orbit Ring 1 (Inner Track - Fine Silver Dashed) */}
              <div className="absolute w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[270px] md:h-[270px] rounded-full border border-dashed border-zinc-400/50 pointer-events-none animate-orbit-1">
                {CREATORS.filter((c) => c.ring === 1).map((c) => (
                  <OrbitNode
                    key={c.id}
                    item={c}
                    counterClass="counter-orbit-1"
                    onClick={() => onPlayVideo(c.video)}
                  />
                ))}
              </div>

              {/* Orbit Ring 2 (Outer Track - Titanium Dashed) */}
              <div className="absolute w-[280px] h-[280px] sm:w-[370px] sm:h-[370px] md:w-[410px] md:h-[410px] rounded-full border border-dashed border-zinc-600/35 pointer-events-none animate-orbit-2">
                {CREATORS.filter((c) => c.ring === 2).map((c) => (
                  <OrbitNode
                    key={c.id}
                    item={c}
                    counterClass="counter-orbit-2"
                    onClick={() => onPlayVideo(c.video)}
                  />
                ))}
              </div>
            </div>

            {/* All 4 Creator Avatars Quick Row */}
            <div className="w-full pt-3 mt-2 border-t border-black/8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {CREATORS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => onPlayVideo(c.video)}
                    className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-black/5 transition-all cursor-pointer group text-left border border-transparent hover:border-black/10"
                    title={`Watch ${c.name} showcase`}
                  >
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-6 h-6 rounded-full object-cover border border-black/10 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#09090b] truncate">{c.name}</p>
                      <p className="text-[10px] text-[#71717a] truncate">{c.stats.split('·')[0]}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Card Footer Status Indicator */}
            <div className="w-full pt-3 mt-2 flex items-center justify-between border-t border-black/8 text-[11px] text-[#71717a]">
              <span className="font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#09090b]" />
                {isCreatorsPaused ? '⏸ Orbit Paused' : '⚡ Interactive Rotation'}
              </span>
              <span className="font-semibold text-[#09090b] hover:underline cursor-pointer">Tap node to watch ▶</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OrbitNode({ item, counterClass, onClick }) {
  const rad = ((item.angle || 0) * Math.PI) / 180
  const left = 50 + 50 * Math.cos(rad)
  const top = 50 + 50 * Math.sin(rad)

  return (
    <div
      style={{
        position: 'absolute',
        left: `${left}%`,
        top: `${top}%`,
        transform: 'translate(-50%, -50%)',
      }}
      className="pointer-events-auto"
    >
      <div className={counterClass}>
        <button
          onClick={onClick}
          className="relative group rounded-full transition-all duration-300 flex items-center justify-center focus-ring cursor-pointer w-11 h-11 sm:w-14 sm:h-14 bg-white border-2 border-white shadow-xl shadow-black/15 overflow-hidden hover:scale-115 hover:shadow-2xl hover:border-[#09090b]/80"
          title={`Click to open ${item.name}`}
        >
          <img
            src={item.image}
            alt={item.name}
            className={`w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105 ${
              item.isLogoWithPadding ? 'p-1.5 object-contain bg-white' : ''
            }`}
          />

          {/* Tooltip on Hover */}
          <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#09090b] border border-white/20 text-white text-[10px] font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-2xl flex items-center gap-1.5 z-30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>{item.name}</span>
            <span className="text-neutral-400 font-normal">· {item.category || item.stats}</span>
          </div>
        </button>
      </div>
    </div>
  )
}
