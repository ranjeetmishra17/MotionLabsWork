import { useState } from 'react'

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
    accent: '#556b2f',
    video: {
      id: 'creator-devansh',
      title: 'Devansh Tech — Ultimate Flagship Smartphone Teardown',
      category: 'YouTube Long-Form Edit',
      duration: '12:40',
      creator: 'Devansh Tech (1.4M Subs)',
      stats: '1.2M Views · 68% Avg Retention',
      bgGradient: 'radial-gradient(circle at 40% 40%, #556b2f, #19220f 75%)',
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
    accent: '#151813',
    video: {
      id: 'creator-kavya',
      title: 'Kavya Money — 3 Tax Secrets the Rich Use',
      category: 'Viral Finance Reel',
      duration: '0:55',
      creator: 'Kavya Money (820K Followers)',
      stats: '4.8M Views · 140K Shares',
      bgGradient: 'radial-gradient(circle at 50% 50%, #68823b, #19220f 80%)',
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
    accent: '#556b2f',
    video: {
      id: 'creator-fitness',
      title: 'The Fitness Protocol — 90-Day Full Physique Transformation',
      category: 'Short-Form UGC & Edit',
      duration: '0:45',
      creator: 'The Fitness Protocol (650K Community)',
      stats: '3.1M Views · 22K Saves',
      bgGradient: 'radial-gradient(circle at 60% 30%, #465337, #151a0f 85%)',
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
    accent: '#151813',
    video: {
      id: 'creator-samar',
      title: 'Samar Explores — Hidden Valleys of Spiti (4K Drone Cut)',
      category: '4K Cinematic Travel Cut',
      duration: '2:15',
      creator: 'Samar Explores (2.1M Community)',
      stats: '2.4M Views · 4K 60FPS',
      bgGradient: 'radial-gradient(circle at 30% 60%, #556b2f, #18200f 75%)',
      description: 'Ultra-wide cinematic drone color grade, ambient spatial wind soundscapes, and orchestral score timing.',
    },
  },
]

export default function CreatorsOrbit({ onPlayVideo }) {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section id="creators-orbit" className="py-24 md:py-32 bg-[#f4f6f0] border-t border-black/8 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none" />

      <div className="container relative z-10">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill mb-5">
            <span className="w-2 h-2 rounded-full bg-[#556b2f] animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#151813]">
              02 · Top Creators in Orbit
            </span>
          </div>

          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#151813] font-bold tracking-tight leading-[1.15] mx-auto max-w-3xl">
            <span>Top Creators We</span>{' '}
            <span className="font-playfair italic font-normal text-[#556b2f]">Edit & Build For.</span>
          </h2>
        </div>

        {/* Orbit Canvas & Creator Cards Grid */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
          {/* Orbit System Container */}
          <div
            className={`relative aspect-square max-w-[340px] sm:max-w-[440px] md:max-w-[520px] mx-auto w-full flex items-center justify-center p-3 sm:p-4 rounded-3xl liquid-card ${
              isPaused ? 'orbit-paused' : ''
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Center Core */}
            <div className="relative z-20 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#151813] text-white flex flex-col items-center justify-center text-center shadow-2xl border-2 sm:border-4 border-[#556b2f] group">
              <div className="absolute inset-0 rounded-full bg-[#556b2f]/30 animate-ping pointer-events-none" />
              <span className="font-sans text-xs sm:text-base md:text-lg font-bold tracking-tight text-white group-hover:text-[#8db152] transition-colors leading-tight">
                CREATOR<br />HUB
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#8db152] font-semibold mt-0.5">
                Watch ▶
              </span>
            </div>

            {/* Orbit Ring 1 (Inner Track) */}
            <div className="absolute w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] rounded-full border border-dashed border-black/15 pointer-events-none animate-orbit-1">
              {CREATORS.filter((c) => c.ring === 1).map((c, i) => (
                <CreatorNode
                  key={c.id}
                  creator={c}
                  index={i}
                  total={CREATORS.filter((item) => item.ring === 1).length}
                  counterClass="counter-orbit-1"
                  onClick={() => onPlayVideo(c.video)}
                />
              ))}
            </div>

            {/* Orbit Ring 2 (Outer Track) */}
            <div className="absolute w-[280px] h-[280px] sm:w-[440px] sm:h-[440px] rounded-full border border-dashed border-[#556b2f]/40 pointer-events-none animate-orbit-2">
              {CREATORS.filter((c) => c.ring === 2).map((c, i) => (
                <CreatorNode
                  key={c.id}
                  creator={c}
                  index={i}
                  total={CREATORS.filter((item) => item.ring === 2).length}
                  counterClass="counter-orbit-2"
                  onClick={() => onPlayVideo(c.video)}
                />
              ))}
            </div>

            {/* Live Orbit Status Indicator */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white/95 backdrop-blur-md rounded-full border border-black/8 text-[10px] sm:text-[11px] font-medium text-[#565e53] shadow-sm">
              {isPaused ? '⏸ Orbit Paused' : '⚡ Live Orbit'}
            </div>
          </div>

          {/* Creator Direct Access Cards */}
          <div className="w-full">
            {/* Clean Sub-header with Proper Spacing */}
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-black/8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#151813] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#556b2f]" />
                Partnered Channels & Edits
              </span>
              <span className="text-[11px] text-[#7d8778] font-medium">Click card to watch ▶</span>
            </div>

            {/* Cards List */}
            <div className="space-y-3.5">
              {CREATORS.map((c) => (
                <div
                  key={c.id}
                  onClick={() => onPlayVideo(c.video)}
                  className="liquid-card p-4 sm:p-4.5 flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shadow-sm shrink-0 group-hover:scale-105 transition-transform"
                      style={{
                        backgroundColor: c.accent === '#556b2f' ? '#556b2f' : '#151813',
                        color: '#ffffff',
                      }}
                    >
                      {c.avatar}
                    </div>
                    <div>
                      <h3 className="font-sans text-base sm:text-lg font-bold text-[#151813] group-hover:text-[#556b2f] transition-colors">
                        {c.name}
                      </h3>
                      <p className="text-xs text-[#565e53]">{c.handle} · {c.category}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-[#556b2f]/12 text-[#556b2f] border border-[#556b2f]/25">
                      {c.stats}
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

function CreatorNode({ creator, index, total, counterClass, onClick }) {
  const angle = (360 / total) * index + (creator.angle || 0)
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
          className="relative group rounded-full transition-all duration-300 flex items-center justify-center focus-ring hover:scale-125 hover:ring-4 hover:ring-[#556b2f] shadow-md cursor-pointer w-9 h-9 sm:w-[46px] sm:h-[46px]"
          style={{
            backgroundColor: creator.accent === '#556b2f' ? '#556b2f' : '#151813',
            color: '#ffffff',
          }}
          title={`Click to watch ${creator.name} edit`}
        >
          <span className="text-xs font-bold leading-none">{creator.avatar}</span>

          {/* Tooltip */}
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#151813] border border-black/10 text-white text-[10px] font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl flex items-center gap-1 z-30">
            <span>▶ Watch {creator.name}</span>
          </div>
        </button>
      </div>
    </div>
  )
}
