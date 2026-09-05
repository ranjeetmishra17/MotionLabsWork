import { useState } from 'react'

const COLUMN_ONE = [
  {
    id: 'v1',
    title: 'Apex Energy — Supercharged Launch',
    category: 'Viral Reel',
    stats: '4.8M Views',
    duration: '0:28',
    creator: 'Apex Athletics',
    bgGradient: 'radial-gradient(circle at 30% 30%, #ff5500, #0a0a0c 75%)',
    description: 'High-octane commercial reel with punchy speed ramping, sound design, and custom kinetic typography.',
  },
  {
    id: 'v2',
    title: 'Velvet Glow — D2C Serum Campaign',
    category: 'Product 4K',
    stats: '3.4M Views',
    duration: '0:32',
    creator: 'Velvet Skin',
    bgGradient: 'radial-gradient(circle at 50% 50%, #ff6600, #121316 80%)',
    description: 'Macro product cinematography with satisfying ASMR textures for 4.2x ROAS on Instagram Reels.',
  },
  {
    id: 'v3',
    title: 'HyperDrive AI — Mobile Interface Reveal',
    category: 'Tech Short',
    stats: '1.9M Views',
    duration: '0:45',
    creator: 'HyperDrive Labs',
    bgGradient: 'radial-gradient(circle at 40% 60%, #ff4400, #090a0c 75%)',
    description: 'Sleek UI interaction recording with dynamic camera tracking and custom spatial audio.',
  },
  {
    id: 'v4',
    title: 'Urban Brew — Morning ASMR Routine',
    category: 'Viral UGC',
    stats: '5.2M Views',
    duration: '0:22',
    creator: 'Coffee Culture',
    bgGradient: 'radial-gradient(circle at 50% 40%, #ff5500, #000000 75%)',
    description: 'Crisp coffee bean grinding soundscapes and cinematic slow-motion pour shots.',
  },
]

const COLUMN_TWO = [
  {
    id: 'v5',
    title: 'FinEdge — Wealth Building Rules',
    category: 'Finance Reel',
    stats: '2.1M Views',
    duration: '0:50',
    creator: 'Tanmay & Co.',
    bgGradient: 'radial-gradient(circle at 70% 30%, #2a2d34, #090a0c 85%)',
    description: 'Engaging talking-head cut with custom kinetic chart popups and retention-optimized pacing.',
  },
  {
    id: 'v6',
    title: 'Kinetix Fitness — 30 Day Sprint',
    category: 'Short-Form UGC',
    stats: '2.9M Views',
    duration: '0:35',
    creator: 'Kinetix Club',
    bgGradient: 'radial-gradient(circle at 30% 70%, #ff5500, #090a0c 85%)',
    description: 'Rapid-fire testimonial pacing with on-screen animated captions and motivational sound design.',
  },
  {
    id: 'v7',
    title: 'Nomad Gear — Indestructible Case',
    category: 'Commercial Ad',
    stats: '1.7M Views',
    duration: '0:40',
    creator: 'Nomad Gear',
    bgGradient: 'radial-gradient(circle at 70% 50%, #ff7700, #14161a 80%)',
    description: 'Outdoor rugged drop test footage combined with clean studio lighting.',
  },
  {
    id: 'v8',
    title: 'Aura Sound — Spatial Noise Cancelling',
    category: '3D Reel',
    stats: '3.1M Views',
    duration: '0:30',
    creator: 'Aura Audio',
    bgGradient: 'radial-gradient(circle at 40% 40%, #ff5500, #050505 70%)',
    description: '3D exploded headphone render with bass soundwave visualization.',
  },
]

const COLUMN_THREE = [
  {
    id: 'v9',
    title: 'Solstice Nights — Neon Aftermovie',
    category: 'Event Recap',
    stats: '2.4M Views',
    duration: '0:45',
    creator: 'Solstice Festival',
    bgGradient: 'radial-gradient(circle at 60% 40%, #ff6600, #090a0c 80%)',
    description: 'Bass-synced rhythmic cuts, crowd energy, and saturated night color grade.',
  },
  {
    id: 'v10',
    title: 'ZeroToOne — Tech Founder Teaser',
    category: 'Documentary',
    stats: '1.5M Views',
    duration: '0:55',
    creator: 'Venture Voices',
    bgGradient: 'radial-gradient(circle at 50% 50%, #1e2025, #090a0c 80%)',
    description: 'Dramatic black-and-white opening transitioning into vibrant orange brand climax.',
  },
  {
    id: 'v11',
    title: 'Glow Botanics — Eco Lip Serum',
    category: 'Product Shoot',
    stats: '3.8M Views',
    duration: '0:25',
    creator: 'Glow Labs',
    bgGradient: 'radial-gradient(circle at 30% 60%, #ff5500, #0e1014 75%)',
    description: 'Dewy water droplet ripples and smooth macro lens panning across packaging.',
  },
  {
    id: 'v12',
    title: 'Shift Wheels — Street Edition',
    category: 'Automotive Cut',
    stats: '4.1M Views',
    duration: '0:38',
    creator: 'Shift Performance',
    bgGradient: 'radial-gradient(circle at 60% 30%, #ff7700, #090a0c 80%)',
    description: 'Dynamic tire smoke zooms and roaring engine audio master tracks.',
  },
]

export default function MovingVideos({ onSelectVideo }) {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section id="videos" className="py-24 md:py-32 bg-[#0c0d10] border-y border-white/8 overflow-hidden relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none" />

      {/* Header Container (Centered for Mobile and Desktop) */}
      <div className="container relative z-10 mb-12 md:mb-16">
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          {/* Centered Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181a20] border border-white/10 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/90">
              Vertical Video Grid
            </span>
          </div>

          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.15] mx-auto max-w-3xl">
            <span className="font-playfair italic font-normal">Reels & Edits in</span>{' '}
            <span className="font-bold">Constant Motion.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#9496a1] leading-relaxed max-w-xl mx-auto text-center">
            Engineered for algorithmic velocity, 70%+ retention curves, and high conversion. Click any reel to watch full 4K playback.
          </p>

          {/* Centered Pause / Motion Control */}
          <div className="mt-6">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#16181e] hover:bg-[#1f222a] border border-white/12 text-xs font-medium text-white transition-all shadow-md focus-ring cursor-pointer group"
            >
              <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-[#ff5500] animate-pulse'}`} />
              <span className="font-semibold">{isPaused ? '▶ Resume Motion' : '❚❚ Pause All'}</span>
              <span className="text-[#5f636e] text-[10px] sm:text-[11px] font-normal border-l border-white/10 pl-2 group-hover:text-[#9496a1] transition-colors hidden xs:inline">
                Tap reel to play 4K
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Vertical Moving Grid Showcase */}
      <div className="container relative z-10">
        <div
          className={`relative h-[520px] sm:h-[620px] md:h-[700px] overflow-hidden rounded-3xl border border-white/10 bg-[#08090b]/80 p-3 sm:p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 shadow-2xl ${
            isPaused ? 'orbit-paused' : ''
          }`}
        >
          {/* Top/Bottom Fade Gradients for Seamless Depth */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#08090b] via-[#08090b]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#08090b] via-[#08090b]/80 to-transparent z-20 pointer-events-none" />

          {/* Column 1: Moves UP */}
          <div className="relative overflow-hidden h-full">
            <div className="animate-marquee-up gap-6">
              {[...COLUMN_ONE, ...COLUMN_ONE].map((v, i) => (
                <VerticalVideoCard
                  key={`col1-${v.id}-${i}`}
                  video={v}
                  onSelect={() => onSelectVideo(v)}
                />
              ))}
            </div>
          </div>

          {/* Column 2: Moves DOWN */}
          <div className="relative overflow-hidden h-full hidden sm:block">
            <div className="animate-marquee-down gap-6">
              {[...COLUMN_TWO, ...COLUMN_TWO].map((v, i) => (
                <VerticalVideoCard
                  key={`col2-${v.id}-${i}`}
                  video={v}
                  onSelect={() => onSelectVideo(v)}
                />
              ))}
            </div>
          </div>

          {/* Column 3: Moves UP */}
          <div className="relative overflow-hidden h-full hidden lg:block">
            <div className="animate-marquee-up gap-6">
              {[...COLUMN_THREE, ...COLUMN_THREE].map((v, i) => (
                <VerticalVideoCard
                  key={`col3-${v.id}-${i}`}
                  video={v}
                  onSelect={() => onSelectVideo(v)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Note */}
      <div className="container relative z-10 text-center mt-12">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#ff5500] transition-colors focus-ring"
        >
          <span>Need viral short-form retention edits for your brand?</span>
          <span className="font-bold underline text-[#ff5500]">Book a 15-min discovery call →</span>
        </a>
      </div>
    </section>
  )
}

function VerticalVideoCard({ video, onSelect }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full aspect-[9/14] bg-[#14161b] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl hover:border-[#ff5500]/60 transition-all duration-300 cursor-pointer group relative flex flex-col justify-between p-5 mb-6"
    >
      {/* Background Gradient Simulation */}
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{ background: video.bgGradient }}
      />

      {/* Dark Overlay Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/60 pointer-events-none" />

      {/* Top Header Information (Bold Sans-Serif) */}
      <div className="relative z-10 flex items-center justify-between font-sans">
        <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-bold text-white uppercase tracking-wider border border-white/10">
          {video.category}
        </span>
        <span className="px-2.5 py-0.5 rounded-md bg-[#ff5500] text-white text-[11px] font-mono font-bold shadow-md">
          {video.duration}
        </span>
      </div>

      {/* Central Play Button Overlay */}
      <div className="relative z-10 self-center">
        <div
          className={`w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-all duration-300 ${
            isHovered ? 'scale-115 bg-[#ff5500] text-white shadow-orange-500/50' : 'scale-90 opacity-80'
          }`}
        >
          <span className="text-base ml-0.5">▶</span>
        </div>
      </div>

      {/* Bottom Content Bar (Bold Sans-Serif) */}
      <div className="relative z-10 font-sans">
        {/* Animated Audio Wave Bars */}
        <div className="flex items-end gap-1 h-3.5 mb-2.5">
          <span className="w-1 bg-[#ff5500] rounded-full animate-bounce" style={{ height: '70%', animationDelay: '0.1s' }} />
          <span className="w-1 bg-white rounded-full animate-bounce" style={{ height: '100%', animationDelay: '0.3s' }} />
          <span className="w-1 bg-[#ff5500] rounded-full animate-bounce" style={{ height: '40%', animationDelay: '0.2s' }} />
          <span className="w-1 bg-white rounded-full animate-bounce" style={{ height: '80%', animationDelay: '0.4s' }} />
        </div>

        <div className="flex items-center justify-between text-xs text-[#9496a1] mb-1.5 font-medium">
          <span className="font-semibold text-white/90">{video.creator}</span>
          <span className="font-bold text-[#ff5500]">{video.stats}</span>
        </div>

        {/* Video Title in Bold Sans-Serif */}
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#ff5500] transition-colors line-clamp-1 tracking-tight leading-snug">
          {video.title}
        </h3>
      </div>
    </div>
  )
}
