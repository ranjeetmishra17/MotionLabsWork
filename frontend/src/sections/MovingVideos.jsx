import { useState } from 'react'
import channelLogo from '../assets/channel-logo.jpg'

// =======================================================================
// MOTION LABS — OFFICIAL VIDEO GRID & SHOWCASE
// Featuring 7 high-impact YouTube Shorts (9:16) & 2 Cinematic Widescreen Films (16:9)
// =======================================================================

const PORTFOLIO_VIDEOS = [
  // COLUMN 1
  {
    id: 'v1',
    youtubeId: 'Y6frvRhOf34',
    youtubeUrl: 'https://youtube.com/shorts/Y6frvRhOf34?feature=share',
    title: 'Motion Labs — Brand Reel',
    category: 'Brand Reel',
    stats: '5.2M Views',
    duration: '0:42',
    creator: 'Motion Labs',
    isVertical: true,
    bgGradient: 'radial-gradient(circle at 30% 30%, #52525b 0%, #27272a 40%, #09090b 85%)',
  },
  {
    id: 'v2',
    youtubeId: 'SxdNVLs3HHc',
    youtubeUrl: 'https://youtube.com/shorts/SxdNVLs3HHc?feature=share',
    title: 'Skyline Heights — Architecture & Drone Ascent',
    category: 'Drone Reel',
    stats: '3.4M Views',
    duration: '0:28',
    creator: 'Motion Labs',
    isVertical: true,
    bgGradient: 'radial-gradient(circle at 60% 40%, #71717a 0%, #3f3f46 45%, #18181b 90%)',
  },
  {
    id: 'v3',
    youtubeId: 'VYj1GJ8CryA',
    youtubeUrl: 'https://youtube.com/shorts/VYj1GJ8CryA?feature=share',
    title: 'Brand UGC — D2C Founder Story',
    category: 'Brand UGC',
    stats: '2.8M Views',
    duration: '0:32',
    creator: 'Motion Labs',
    isVertical: true,
    bgGradient: 'radial-gradient(circle at 40% 60%, #3f3f46 0%, #1c1c20 50%, #050507 85%)',
  },

  // COLUMN 2
  {
    id: 'v4',
    youtubeId: 'tkF6eEGF4fg',
    youtubeUrl: 'https://youtube.com/shorts/tkF6eEGF4fg?feature=share',
    title: 'Documentary Reel',
    category: 'Documentary',
    stats: '4.1M Views',
    duration: '0:35',
    creator: 'Motion Labs',
    isVertical: true,
    bgGradient: 'radial-gradient(circle at 50% 35%, #585862 0%, #29292e 50%, #0f0f11 85%)',
  },
  {
    id: 'v5',
    youtubeId: 'ZlVKQeQw808',
    youtubeUrl: 'https://youtube.com/shorts/ZlVKQeQw808?feature=share',
    title: 'AI Tech Breakdown & Motion UI',
    category: 'Tech Creator',
    stats: '3.9M Views',
    duration: '0:45',
    creator: 'Motion Labs',
    isVertical: true,
    bgGradient: 'radial-gradient(circle at 70% 30%, #3a3a40 0%, #1f1f23 50%, #09090b 90%)',
  },
  {
    id: 'v6',
    youtubeId: 'K3NvOgzqLyM',
    youtubeUrl: 'https://youtube.com/shorts/K3NvOgzqLyM?feature=share',
    title: 'AI Productivity Speedrun',
    category: 'Viral Short',
    stats: '2.6M Views',
    duration: '0:30',
    creator: 'Motion Labs',
    isVertical: true,
    bgGradient: 'radial-gradient(circle at 30% 70%, #63636e 0%, #323238 50%, #121214 90%)',
  },

  // COLUMN 3
  {
    id: 'v7',
    youtubeId: '4cR8Sw2fX44',
    youtubeUrl: 'https://youtube.com/shorts/4cR8Sw2fX44?feature=share',
    title: 'Dubai Aerial Villa Tour',
    category: 'Luxury Drone',
    stats: '6.1M Views',
    duration: '0:38',
    creator: 'Motion Labs',
    isVertical: true,
    bgGradient: 'radial-gradient(circle at 65% 45%, #4a4a52 0%, #252529 50%, #0c0c0e 85%)',
  },
  {
    id: 'v8',
    youtubeId: 'ICNkdCnYC-o',
    youtubeUrl: 'https://youtu.be/ICNkdCnYC-o',
    title: 'Sufi Harmonies — Live Concert Film',
    category: '4K Concert Film',
    stats: '4.5M Views',
    duration: '03:40',
    creator: 'Motion Labs',
    isVertical: false,
    bgGradient: 'radial-gradient(circle at 45% 45%, #52525b 0%, #202024 50%, #08080a 80%)',
  },
  {
    id: 'v9',
    youtubeId: 'Fm0b46OCz4M',
    youtubeUrl: 'https://youtu.be/Fm0b46OCz4M',
    title: 'Neon Bass Stage — DJ Festival Aftermovie',
    category: '4K Event Film',
    stats: '7.8M Views',
    duration: '02:15',
    creator: 'Motion Labs',
    isVertical: false,
    bgGradient: 'radial-gradient(circle at 60% 40%, #60606b 0%, #2b2b30 50%, #0e0e10 85%)',
  },
]


// Group into 3 balanced columns
const COLUMN_ONE = [PORTFOLIO_VIDEOS[0], PORTFOLIO_VIDEOS[1], PORTFOLIO_VIDEOS[2]]
const COLUMN_TWO = [PORTFOLIO_VIDEOS[3], PORTFOLIO_VIDEOS[4], PORTFOLIO_VIDEOS[5]]
const COLUMN_THREE = [PORTFOLIO_VIDEOS[6], PORTFOLIO_VIDEOS[7], PORTFOLIO_VIDEOS[8]]

export default function MovingVideos({ onSelectVideo }) {
  const [isPaused, setIsPaused] = useState(false)
  const [filter, setFilter] = useState('all') // 'all' | 'shorts' | 'films'
  const [viewMode, setViewMode] = useState('marquee') // 'marquee' | 'grid'

  const filteredVideos =
    filter === 'all'
      ? PORTFOLIO_VIDEOS
      : filter === 'shorts'
      ? PORTFOLIO_VIDEOS.filter((v) => v.isVertical)
      : PORTFOLIO_VIDEOS.filter((v) => !v.isVertical)

  return (
    <section id="videos" className="py-24 md:py-32 bg-[#f5f5f5] border-y border-black/8 overflow-hidden relative scroll-mt-10">
      <div id="portfolio" className="absolute -top-20" />
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none" />

      {/* Header Container */}
      <div className="container relative z-10 mb-10 md:mb-14">
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          {/* Centered Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill mb-4 border border-black/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#09090b] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#09090b]">
              Official Video Portfolio
            </span>
            <span className="text-[10px] font-mono font-bold bg-black/5 px-2 py-0.5 rounded-full text-zinc-700">
              9 Productions
            </span>
          </div>

          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#09090b] font-bold tracking-tight leading-[1.15] mx-auto max-w-3xl">
            <span>Reels & Films in</span>{' '}
            <span className="font-playfair italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#18181b] via-[#52525b] to-[#09090b]">
              Constant Motion.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[#52525b] mt-3.5 max-w-xl mx-auto">
            High-velocity short-form reels and 4K widescreen cinematic films edited for maximum retention, click-through, and brand authority.
          </p>

          {/* Interactive Controls Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {/* Category Filter Pills */}
            <div className="inline-flex p-1 rounded-full bg-black/6 border border-black/8 backdrop-blur-md">
              <button
                onClick={() => setFilter('all')}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all focus-ring cursor-pointer ${
                  filter === 'all'
                    ? 'bg-[#09090b] text-white shadow-md'
                    : 'text-[#71717a] hover:text-[#09090b]'
                }`}
              >
                All Projects (9)
              </button>
              <button
                onClick={() => setFilter('shorts')}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all focus-ring cursor-pointer ${
                  filter === 'shorts'
                    ? 'bg-[#09090b] text-white shadow-md'
                    : 'text-[#71717a] hover:text-[#09090b]'
                }`}
              >
                9:16 Reels (7)
              </button>
              <button
                onClick={() => setFilter('films')}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all focus-ring cursor-pointer ${
                  filter === 'films'
                    ? 'bg-[#09090b] text-white shadow-md'
                    : 'text-[#71717a] hover:text-[#09090b]'
                }`}
              >
                16:9 Films (2)
              </button>
            </div>

            {/* View Mode & Motion Controls */}
            <div className="inline-flex items-center gap-2">
              {filter === 'all' && (
                <button
                  onClick={() => setViewMode(viewMode === 'marquee' ? 'grid' : 'marquee')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-semibold text-[#09090b] transition-all focus-ring cursor-pointer hover:bg-white"
                  title="Toggle between moving stream and static grid"
                >
                  <span>{viewMode === 'marquee' ? '⊞ Full Grid' : '⚡ Motion Stream'}</span>
                </button>
              )}

              {viewMode === 'marquee' && filter === 'all' && (
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-semibold text-[#09090b] transition-all focus-ring cursor-pointer hover:bg-white"
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isPaused ? 'bg-[#71717a]' : 'bg-[#09090b] animate-pulse'
                    }`}
                  />
                  <span>{isPaused ? '▶ Resume' : '❚❚ Pause'}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Video Showcase Viewports */}
      <div className="container relative z-10">
        {/* MODE A: Continuous Scrolling Motion Grid */}
        {viewMode === 'marquee' && filter === 'all' ? (
          <div
            className={`relative h-[560px] sm:h-[640px] md:h-[720px] overflow-hidden rounded-3xl border border-black/8 bg-white/70 p-3 sm:p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 shadow-xl ${
              isPaused ? 'orbit-paused' : ''
            }`}
          >
            {/* Top/Bottom Fade Gradients for Seamless Depth */}
            <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#f5f5f5] via-[#f5f5f5]/85 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#f5f5f5] via-[#f5f5f5]/85 to-transparent z-20 pointer-events-none" />

            {/* Column 1: Moves UP */}
            <div className="relative overflow-hidden h-full">
              <div className="animate-marquee-up gap-6">
                {[...COLUMN_ONE, ...COLUMN_ONE].map((v, i) => (
                  <VideoCard
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
                  <VideoCard
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
                  <VideoCard
                    key={`col3-${v.id}-${i}`}
                    video={v}
                    onSelect={() => onSelectVideo(v)}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* MODE B: Full Static Grid (for filtered view or user toggle) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((v) => (
              <VideoCard
                key={`grid-${v.id}`}
                video={v}
                onSelect={() => onSelectVideo(v)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom Action Note */}
      <div className="container relative z-10 text-center mt-12">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#09090b] hover:text-[#52525b] transition-colors focus-ring"
        >
          <span>Want viral retention edits or commercial 4K films for your brand?</span>
          <span className="font-bold underline text-[#09090b]">Book a 15-min discovery call →</span>
        </a>
      </div>
    </section>
  )
}

function VideoCard({ video, onSelect }) {
  const [isHovered, setIsHovered] = useState(false)
  const isVertical = video.isVertical !== false // default true
  const [imgSrc, setImgSrc] = useState(
    `https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`
  )

  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full bg-[#09090b] rounded-2xl overflow-hidden border border-black/15 shadow-xl hover:shadow-2xl hover:border-white/60 transition-all duration-300 cursor-pointer group relative flex flex-col justify-between p-5 mb-6 select-none ${
        isVertical ? 'aspect-[9/16]' : 'aspect-[16/9]'
      }`}
    >
      {/* Background Poster Thumbnail */}
      <img
        src={imgSrc}
        alt="Motion Labs Production"
        loading="lazy"
        onError={() => setImgSrc(`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`)}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Luxury Specular Gloss Sheen */}
      <div className="specular-gloss" />

      {/* Dark Vignette Overlay for Crisp Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/75 pointer-events-none" />

      {/* Top Header Information: Channel Logo & Channel Name */}
      <div className="relative z-10 flex items-center justify-between font-sans">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-md">
          <img
            src={channelLogo}
            alt="Motion Labs"
            className="w-5 h-5 rounded-full object-cover bg-white"
          />
          <span className="text-xs font-bold text-white tracking-wide">
            Motion Labs
          </span>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-bold shadow-md">
          {video.duration}
        </span>
      </div>

      {/* Central Play Button Overlay */}
      <div className="relative z-10 self-center">
        <div
          className={`w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-all duration-300 ${
            isHovered
              ? 'scale-115 bg-white text-black shadow-2xl ring-4 ring-white/50'
              : 'scale-90 opacity-90'
          }`}
        >
          <span className="text-base ml-0.5 font-bold">▶</span>
        </div>
      </div>

      {/* Bottom Content Bar */}
      <div className="relative z-10 font-sans">
        {/* Equalizer Audio Waves */}
        <div className="flex items-end gap-1 h-3.5 mb-2.5">
          <span className="w-1 bg-white rounded-full animate-bounce" style={{ height: '70%', animationDelay: '0.1s' }} />
          <span className="w-1 bg-zinc-300 rounded-full animate-bounce" style={{ height: '100%', animationDelay: '0.3s' }} />
          <span className="w-1 bg-zinc-400 rounded-full animate-bounce" style={{ height: '45%', animationDelay: '0.2s' }} />
          <span className="w-1 bg-zinc-200 rounded-full animate-bounce" style={{ height: '85%', animationDelay: '0.4s' }} />
        </div>

        <div className="flex items-center justify-between text-xs text-zinc-200 mb-1.5 font-medium">
          <span className="font-semibold text-white tracking-wide">{video.category}</span>
          <span className="font-bold text-zinc-300 bg-white/10 px-2 py-0.5 rounded border border-white/15 text-[10px] shrink-0">
            {video.stats}
          </span>
        </div>

        <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-400 font-medium">
          <span className="flex items-center gap-1 text-white font-semibold group-hover:underline">
            <span>{isVertical ? 'Watch Reel' : 'Watch Film'}</span>
            <span>→</span>
          </span>
          <span className="font-mono text-[10px] bg-black/50 px-1.5 py-0.5 rounded border border-white/10 text-zinc-300">
            {isVertical ? '9:16 Reel' : '16:9 Film'}
          </span>
        </div>
      </div>
    </div>
  )
}
