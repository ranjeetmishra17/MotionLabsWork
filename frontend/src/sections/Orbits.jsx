import { useState } from 'react'

const BRANDS = [
  {
    id: 'b1',
    name: 'Nocturne Skincare',
    category: 'Beauty & Skincare',
    stat: '4.2x ROAS',
    avatar: 'NC',
    ring: 1,
    angle: 0,
    video: {
      id: 'brand-nocturne',
      title: 'Nocturne Skincare — 4K Clinical Launch Film',
      category: 'Product Shoot · Macro 4K',
      duration: '0:45',
      creator: 'Nocturne Skincare',
      stats: '3.4M Views · 4.2x ROAS',
      bgGradient: 'radial-gradient(circle at 40% 40%, #383838, #111111 80%)',
      description: 'Cinematic studio lighting, slow-motion texture captures, and high-converting hook edits produced for Nocturne Skincare.',
    },
  },
  {
    id: 'b2',
    name: 'Ferro Mobility',
    category: 'Clean EV Commuter',
    stat: '1.4K Preorders',
    avatar: 'FB',
    ring: 2,
    angle: 60,
    video: {
      id: 'brand-ferro',
      title: 'Ferro Bikes — Electric Flagship Launch Film',
      category: 'Commercial Ad · 4K Color Grade',
      duration: '1:10',
      creator: 'Ferro Mobility',
      stats: '2.8M Views · 1.4K Preorders',
      bgGradient: 'radial-gradient(circle at 60% 40%, #444444, #0f0f0f 85%)',
      description: 'Full-scale on-location shoot, dynamic rolling car shots, and bass-synced electronic sound design.',
    },
  },
  {
    id: 'b3',
    name: 'Baseline Coffee',
    category: 'Specialty Roastery',
    stat: '+180K Community',
    avatar: 'BC',
    ring: 1,
    angle: 180,
    video: {
      id: 'brand-baseline',
      title: 'Baseline Coffee — Aesthetic Reel Engine',
      category: 'Content Shoot · SMM',
      duration: '0:30',
      creator: 'Baseline Coffee Co.',
      stats: '5.2M Total Reach · 6.8% Engagement',
      bgGradient: 'radial-gradient(circle at 50% 50%, #3a3a3a, #121212 80%)',
      description: 'A month of daily ASMR reels and lifestyle barista shoots resulting in a 400% surge in online bean subscriptions.',
    },
  },
  {
    id: 'b4',
    name: 'HyperDrive AI',
    category: 'Enterprise SaaS',
    stat: '0.6s Interactive',
    avatar: 'HD',
    ring: 2,
    angle: 240,
    video: {
      id: 'brand-hyperdrive',
      title: 'HyperDrive AI — Product Keynote & Motion UI',
      category: 'Tech Brand Film · 3D',
      duration: '1:45',
      creator: 'HyperDrive Labs',
      stats: '950K Tech Views',
      bgGradient: 'radial-gradient(circle at 30% 60%, #303030, #0a0a0a 75%)',
      description: 'Exploded UI node interactions, kinetic text animations, and investor-ready product keynote presentation.',
    },
  },
  {
    id: 'b5',
    name: 'Nomad Gear',
    category: 'Adventure Tech',
    stat: '2.4M Views',
    avatar: 'NG',
    ring: 2,
    angle: 310,
    video: {
      id: 'brand-nomad',
      title: 'Nomad Gear — Indestructible Travel Ad',
      category: 'Commercial Ad',
      duration: '0:40',
      creator: 'Nomad Gear',
      stats: '2.4M Views · 18% CTR',
      bgGradient: 'radial-gradient(circle at 50% 30%, #404040, #111111 80%)',
      description: 'Extreme drop tests, desert dust storms, and macro zipper durability tests in high-speed 4K.',
    },
  },
]

const CREATORS = [
  {
    id: 'c1',
    name: 'Devansh Tech',
    handle: '@devanshtech',
    stats: '1.4M Subscribers',
    category: 'Consumer Tech',
    avatar: 'DT',
    ring: 1,
    angle: 30,
    video: {
      id: 'creator-devansh',
      title: 'Devansh Tech — Ultimate Flagship Smartphone Teardown',
      category: 'YouTube Long-Form Edit',
      duration: '12:40',
      creator: 'Devansh Tech (1.4M Subs)',
      stats: '1.2M Views · 68% Avg Retention',
      bgGradient: 'radial-gradient(circle at 40% 40%, #383838, #111111 75%)',
      description: 'Retention-engineered pacing with custom sound cues, kinetic 3D B-roll overlays, and color grade.',
    },
  },
  {
    id: 'c2',
    name: 'Kavya Money',
    handle: '@kavyagrows',
    stats: '820K Followers',
    category: 'Finance & Investing',
    avatar: 'KM',
    ring: 2,
    angle: 110,
    video: {
      id: 'creator-kavya',
      title: 'Kavya Money — 3 Tax Secrets the Rich Use',
      category: 'Viral Finance Reel',
      duration: '0:55',
      creator: 'Kavya Money (820K Followers)',
      stats: '4.8M Views · 140K Shares',
      bgGradient: 'radial-gradient(circle at 50% 50%, #424242, #131313 80%)',
      description: 'High-tempo talking head cut with animated infographics, pop-in charts, and sound design.',
    },
  },
  {
    id: 'c3',
    name: 'The Fitness Protocol',
    handle: '@fitnessprotocol',
    stats: '650K Community',
    category: 'Health & Athletics',
    avatar: 'FP',
    ring: 1,
    angle: 210,
    video: {
      id: 'creator-fitness',
      title: 'The Fitness Protocol — 90-Day Full Physique Transformation',
      category: 'Short-Form UGC & Edit',
      duration: '0:45',
      creator: 'The Fitness Protocol (650K Community)',
      stats: '3.1M Views · 22K Saves',
      bgGradient: 'radial-gradient(circle at 60% 30%, #333333, #0c0c0c 85%)',
      description: 'Dynamic workout pacing, bass drops synced to reps, and kinetic motivational subtitles.',
    },
  },
  {
    id: 'c4',
    name: 'Samar Explores',
    handle: '@samarexplores',
    stats: '2.1M Across Platforms',
    category: 'Travel & Documentary',
    avatar: 'SE',
    ring: 2,
    angle: 290,
    video: {
      id: 'creator-samar',
      title: 'Samar Explores — Hidden Valleys of Spiti (4K Drone Cut)',
      category: '4K Cinematic Travel Cut',
      duration: '2:15',
      creator: 'Samar Explores (2.1M Community)',
      stats: '2.4M Views · 4K 60FPS',
      bgGradient: 'radial-gradient(circle at 30% 60%, #303030, #0a0a0a 75%)',
      description: 'Ultra-wide cinematic drone color grade, ambient spatial wind soundscapes, and orchestral score timing.',
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
                5 Client Partners
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
              {/* Center Core: Luxury Multi-Tone Metallic Disc */}
              <button
                onClick={() => onPlayVideo(BRANDS[0].video)}
                className="relative z-20 w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 rounded-full metallic-core text-white flex flex-col items-center justify-center text-center cursor-pointer group focus-ring transition-transform"
                title="Play Featured Brand Reel"
              >
                {/* Concentric subtle groove */}
                <div className="absolute w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full border border-white/20 pointer-events-none" />
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping pointer-events-none" />
                <span className="font-sans text-xs sm:text-sm md:text-base font-extrabold tracking-tight text-white leading-tight">
                  BRANDS<br />ORBIT
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-zinc-300 font-bold mt-1 group-hover:text-white transition-colors">
                  Play ▶
                </span>
              </button>

              {/* Orbit Ring 1 (Inner Track - Fine Silver Dashed) */}
              <div className="absolute w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[270px] md:h-[270px] rounded-full border border-dashed border-zinc-400/50 pointer-events-none animate-orbit-1">
                {BRANDS.filter((b) => b.ring === 1).map((b, i) => (
                  <OrbitNode
                    key={b.id}
                    item={b}
                    index={i}
                    total={BRANDS.filter((item) => item.ring === 1).length}
                    counterClass="counter-orbit-1"
                    onClick={() => onPlayVideo(b.video)}
                  />
                ))}
              </div>

              {/* Orbit Ring 2 (Outer Track - Titanium Dashed) */}
              <div className="absolute w-[280px] h-[280px] sm:w-[370px] sm:h-[370px] md:w-[410px] md:h-[410px] rounded-full border border-dashed border-zinc-600/35 pointer-events-none animate-orbit-2">
                {BRANDS.filter((b) => b.ring === 2).map((b, i) => (
                  <OrbitNode
                    key={b.id}
                    item={b}
                    index={i}
                    total={BRANDS.filter((item) => item.ring === 2).length}
                    counterClass="counter-orbit-2"
                    onClick={() => onPlayVideo(b.video)}
                  />
                ))}
              </div>
            </div>

            {/* Card Footer Status Indicator */}
            <div className="w-full pt-3 flex items-center justify-between border-t border-black/8 text-[11px] text-[#71717a]">
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
              {/* Center Core: Luxury Multi-Tone Metallic Disc */}
              <button
                onClick={() => onPlayVideo(CREATORS[0].video)}
                className="relative z-20 w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 rounded-full metallic-core text-white flex flex-col items-center justify-center text-center cursor-pointer group focus-ring transition-transform"
                title="Watch Featured Creator Edit"
              >
                {/* Concentric subtle groove */}
                <div className="absolute w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full border border-white/20 pointer-events-none" />
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping pointer-events-none" />
                <span className="font-sans text-xs sm:text-sm md:text-base font-extrabold tracking-tight text-white leading-tight">
                  CREATOR<br />HUB
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-zinc-300 font-bold mt-1 group-hover:text-white transition-colors">
                  Watch ▶
                </span>
              </button>

              {/* Orbit Ring 1 (Inner Track - Fine Silver Dashed) */}
              <div className="absolute w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[270px] md:h-[270px] rounded-full border border-dashed border-zinc-400/50 pointer-events-none animate-orbit-1">
                {CREATORS.filter((c) => c.ring === 1).map((c, i) => (
                  <OrbitNode
                    key={c.id}
                    item={c}
                    index={i}
                    total={CREATORS.filter((item) => item.ring === 1).length}
                    counterClass="counter-orbit-1"
                    onClick={() => onPlayVideo(c.video)}
                  />
                ))}
              </div>

              {/* Orbit Ring 2 (Outer Track - Titanium Dashed) */}
              <div className="absolute w-[280px] h-[280px] sm:w-[370px] sm:h-[370px] md:w-[410px] md:h-[410px] rounded-full border border-dashed border-zinc-600/35 pointer-events-none animate-orbit-2">
                {CREATORS.filter((c) => c.ring === 2).map((c, i) => (
                  <OrbitNode
                    key={c.id}
                    item={c}
                    index={i}
                    total={CREATORS.filter((item) => item.ring === 2).length}
                    counterClass="counter-orbit-2"
                    onClick={() => onPlayVideo(c.video)}
                  />
                ))}
              </div>
            </div>

            {/* Card Footer Status Indicator */}
            <div className="w-full pt-3 flex items-center justify-between border-t border-black/8 text-[11px] text-[#71717a]">
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

function OrbitNode({ item, index, total, counterClass, onClick }) {
  const angle = (360 / total) * index + (item.angle || 0)
  const rad = (angle * Math.PI) / 180
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
          className="relative group rounded-full transition-all duration-300 flex items-center justify-center focus-ring node-disc cursor-pointer w-9 h-9 sm:w-[46px] sm:h-[46px]"
          title={`Click to open ${item.name}`}
        >
          <span className="text-xs font-bold leading-none text-white tracking-tight">{item.avatar}</span>

          {/* Tooltip on Hover */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#09090b] border border-white/20 text-white text-[10px] font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-2xl flex items-center gap-1 z-30">
            <span>▶ {item.name}</span>
          </div>
        </button>
      </div>
    </div>
  )
}
