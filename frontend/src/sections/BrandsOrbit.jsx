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
    accent: '#556b2f',
    video: {
      id: 'brand-nocturne',
      title: 'Nocturne Skincare — 4K Clinical Launch Film',
      category: 'Product Shoot · Macro 4K',
      duration: '0:45',
      creator: 'Nocturne Skincare',
      stats: '3.4M Views · 4.2x ROAS',
      bgGradient: 'radial-gradient(circle at 40% 40%, #556b2f, #1a2210 80%)',
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
    accent: '#151813',
    video: {
      id: 'brand-ferro',
      title: 'Ferro Bikes — Electric Flagship Launch Film',
      category: 'Commercial Ad · 4K Color Grade',
      duration: '1:10',
      creator: 'Ferro Mobility',
      stats: '2.8M Views · 1.4K Preorders',
      bgGradient: 'radial-gradient(circle at 60% 40%, #465337, #151a0f 85%)',
      description: 'Full-scale on-location shoot in Delhi, dynamic rolling car shots, and bass-synced electronic sound design.',
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
    accent: '#556b2f',
    video: {
      id: 'brand-baseline',
      title: 'Baseline Coffee — Aesthetic Reel Engine',
      category: 'Content Shoot · SMM',
      duration: '0:30',
      creator: 'Baseline Coffee Co.',
      stats: '5.2M Total Reach · 6.8% Engagement',
      bgGradient: 'radial-gradient(circle at 50% 50%, #68823b, #19220f 80%)',
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
    accent: '#151813',
    video: {
      id: 'brand-hyperdrive',
      title: 'HyperDrive AI — Product Keynote & Motion UI',
      category: 'Tech Brand Film · 3D',
      duration: '1:45',
      creator: 'HyperDrive Labs',
      stats: '950K Tech Views',
      bgGradient: 'radial-gradient(circle at 30% 60%, #556b2f, #18200f 75%)',
      description: 'Exploded UI node interactions, kinetic kinetic text animations, and investor-ready product keynote presentation.',
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
    accent: '#556b2f',
    video: {
      id: 'brand-nomad',
      title: 'Nomad Gear — Indestructible Travel Ad',
      category: 'Commercial Ad',
      duration: '0:40',
      creator: 'Nomad Gear',
      stats: '2.4M Views · 18% CTR',
      bgGradient: 'radial-gradient(circle at 50% 30%, #617b35, #17200e 80%)',
      description: 'Extreme drop tests, desert dust storms, and macro zipper durability tests in high-speed 4K.',
    },
  },
]

export default function BrandsOrbit({ onPlayVideo }) {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section id="brands-orbit" className="py-24 md:py-32 bg-[#fbfcf9] relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dots-dark opacity-50 pointer-events-none" />

      <div className="container relative z-10">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/8 shadow-sm mb-5">
            <span className="w-2 h-2 rounded-full bg-[#556b2f] animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#151813]">
              01 · Top Brands in Orbit
            </span>
          </div>

          <h2 className="font-playfair text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#151813] tracking-tight leading-[1.15] mx-auto max-w-3xl font-normal">
            <span className="italic">Brands We Have</span>{' '}
            <span className="font-semibold">Scaled & Produced</span>
          </h2>
        </div>

        {/* Orbit Canvas & Interactive Brand Grid */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
          {/* Orbit System Container */}
          <div
            className={`relative aspect-square max-w-[340px] sm:max-w-[440px] md:max-w-[520px] mx-auto w-full flex items-center justify-center p-3 sm:p-4 rounded-3xl border border-black/8 bg-white/90 backdrop-blur-xl shadow-xl ${
              isPaused ? 'orbit-paused' : ''
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Center Core */}
            <div className="relative z-20 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#151813] text-white flex flex-col items-center justify-center text-center shadow-2xl border-2 sm:border-4 border-[#556b2f]/50 group">
              <div className="absolute inset-0 rounded-full bg-[#556b2f]/25 animate-ping pointer-events-none" />
              <span className="font-playfair text-xs sm:text-base md:text-lg font-bold text-white group-hover:text-[#8db152] transition-colors leading-tight">
                BRANDS<br />ORBIT
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#8db152] font-semibold mt-0.5">
                Play ▶
              </span>
            </div>

            {/* Orbit Ring 1 (Inner Track) */}
            <div className="absolute w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] rounded-full border border-dashed border-black/15 pointer-events-none animate-orbit-1">
              {BRANDS.filter((b) => b.ring === 1).map((b, i) => (
                <BrandNode
                  key={b.id}
                  brand={b}
                  index={i}
                  total={BRANDS.filter((item) => item.ring === 1).length}
                  counterClass="counter-orbit-1"
                  onClick={() => onPlayVideo(b.video)}
                />
              ))}
            </div>

            {/* Orbit Ring 2 (Outer Track) */}
            <div className="absolute w-[280px] h-[280px] sm:w-[440px] sm:h-[440px] rounded-full border border-dashed border-[#556b2f]/40 pointer-events-none animate-orbit-2">
              {BRANDS.filter((b) => b.ring === 2).map((b, i) => (
                <BrandNode
                  key={b.id}
                  brand={b}
                  index={i}
                  total={BRANDS.filter((item) => item.ring === 2).length}
                  counterClass="counter-orbit-2"
                  onClick={() => onPlayVideo(b.video)}
                />
              ))}
            </div>

            {/* Live Orbit Status Indicator */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white/95 backdrop-blur-md rounded-full border border-black/8 text-[10px] sm:text-[11px] font-medium text-[#565e53] shadow-sm">
              {isPaused ? '⏸ Orbit Paused' : '⚡ Interactive Orbit'}
            </div>
          </div>

          {/* Brand Direct Access Cards */}
          <div className="w-full">
            {/* Clean Sub-header with Proper Spacing */}
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-black/8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#151813] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#556b2f]" />
                Featured Client Productions
              </span>
              <span className="text-[11px] text-[#7d8778] font-medium">Click card to play ▶</span>
            </div>

            {/* Cards List */}
            <div className="space-y-3.5">
              {BRANDS.map((b) => (
                <div
                  key={b.id}
                  onClick={() => onPlayVideo(b.video)}
                  className="liquid-card p-4 sm:p-4.5 bg-white/95 border-black/8 hover:border-[#556b2f]/60 flex items-center justify-between gap-4 cursor-pointer group transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shadow-sm shrink-0 group-hover:scale-105 transition-transform"
                      style={{
                        backgroundColor: b.accent === '#556b2f' ? '#556b2f' : '#151813',
                        color: '#ffffff',
                      }}
                    >
                      {b.avatar}
                    </div>
                    <div>
                      <h3 className="font-playfair text-base sm:text-lg font-bold text-[#151813] group-hover:text-[#556b2f] transition-colors">
                        {b.name}
                      </h3>
                      <p className="text-xs text-[#565e53]">{b.category}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-[#556b2f]/12 text-[#556b2f] border border-[#556b2f]/25">
                      {b.stat}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-black/5 text-[#151813] flex items-center justify-center text-xs group-hover:bg-[#556b2f] group-hover:text-white transition-colors shadow-sm">
                      ▶
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BrandNode({ brand, index, total, counterClass, onClick }) {
  const angle = (360 / total) * index + (brand.angle || 0)
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
          className="relative group rounded-full p-2 transition-all duration-300 flex items-center justify-center focus-ring hover:scale-125 hover:ring-4 hover:ring-[#556b2f] shadow-md cursor-pointer"
          style={{
            backgroundColor: brand.accent === '#556b2f' ? '#556b2f' : '#151813',
            color: '#ffffff',
            width: '46px',
            height: '46px',
          }}
          title={`Click to play ${brand.name} video`}
        >
          <span className="text-xs font-bold leading-none">{brand.avatar}</span>

          {/* Tooltip */}
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#151813] border border-black/10 text-white text-[10px] font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl flex items-center gap-1 z-30">
            <span>▶ Play {brand.name}</span>
          </div>
        </button>
      </div>
    </div>
  )
}
