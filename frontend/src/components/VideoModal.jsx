import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

/**
 * Extracts an 11-character YouTube video ID from various link formats:
 * - Raw ID: "dQw4w9WgXcQ"
 * - Shorts: "https://www.youtube.com/shorts/dQw4w9WgXcQ"
 * - Standard: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
 * - Shortened: "https://youtu.be/dQw4w9WgXcQ"
 * - Embed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
 */
function extractYouTubeId(video) {
  if (!video) return null
  if (video.youtubeId && typeof video.youtubeId === 'string' && video.youtubeId.trim().length === 11) {
    return video.youtubeId.trim()
  }
  const candidate = video.youtubeId || video.youtubeUrl || video.url || video.videoUrl
  if (typeof candidate !== 'string') return null

  const match = candidate.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/
  )
  return match ? match[1] : null
}

export default function VideoModal({ video, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true)

  if (!video) return null

  const youtubeId = extractYouTubeId(video)
  const isDirectVideo = !youtubeId && Boolean(video.videoUrl)
  const isDemoSimulation = !youtubeId && !isDirectVideo

  // Determine if vertical reel (9:16) or horizontal widescreen (16:9)
  const isVertical =
    video.isVertical !== undefined
      ? Boolean(video.isVertical)
      : Boolean(
          video.category?.toLowerCase().includes('reel') ||
          video.category?.toLowerCase().includes('short') ||
          video.category?.toLowerCase().includes('ugc')
        )

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full ${
            isVertical ? 'max-w-md' : 'max-w-4xl'
          } bg-white rounded-3xl overflow-hidden shadow-2xl border border-black/10 z-10 text-[#09090b] my-auto flex flex-col`}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/8 bg-[#f4f4f6] shrink-0">
            <div className="flex items-center gap-2.5 truncate">
              <span className="w-2 h-2 rounded-full bg-[#09090b] animate-pulse shrink-0" />
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#09090b] truncate">
                {video.category || 'Production Showcase'} · {video.duration || '0:45'}
              </p>
              {isVertical && (
                <span className="hidden xs:inline-block px-2 py-0.5 rounded-full bg-black/5 text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                  9:16 Reel
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-black/5 hover:bg-[#09090b] hover:text-white text-[#09090b] flex items-center justify-center transition-all focus-ring cursor-pointer shrink-0 ml-2"
              aria-label="Close video player"
            >
              ✕
            </button>
          </div>

          {/* Video Player Display */}
          <div className="relative bg-black flex items-center justify-center overflow-hidden">
            {/* 1. Real YouTube Video Player */}
            {youtubeId ? (
              <div
                className={`w-full ${
                  isVertical ? 'aspect-[9/16] max-h-[68vh]' : 'aspect-video'
                } bg-black flex items-center justify-center`}
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={video.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : isDirectVideo ? (
              /* 2. Direct MP4 Video Player */
              <div
                className={`w-full ${
                  isVertical ? 'aspect-[9/16] max-h-[68vh]' : 'aspect-video'
                } bg-black flex items-center justify-center`}
              >
                <video
                  src={video.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              /* 3. Sleek Studio Simulation Fallback (When no YouTube ID yet) */
              <div
                className={`relative w-full ${
                  isVertical ? 'aspect-[9/16] max-h-[68vh]' : 'aspect-video'
                } bg-black flex items-center justify-center overflow-hidden group`}
              >
                {/* Visual gradient video background */}
                <div
                  className="absolute inset-0 opacity-85 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    background:
                      video.bgGradient || 'radial-gradient(circle at center, #2a2a2a, #0a0a0c)',
                  }}
                />

                {/* Optional poster thumbnail if provided */}
                {video.thumbnail && (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                )}

                {/* Animated Studio Orbit Graphic in Monochrome */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-white/20 flex items-center justify-center animate-spin"
                    style={{ animationDuration: '20s' }}
                  >
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-white/30 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/15 blur-md" />
                    </div>
                  </div>
                </div>

                {/* Central Play / Pause Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer hover:bg-black hover:text-white"
                  aria-label={isPlaying ? 'Pause preview' : 'Play preview'}
                >
                  {isPlaying ? (
                    <span className="text-lg sm:text-xl font-bold">❚❚</span>
                  ) : (
                    <span className="text-xl sm:text-2xl ml-1">▶</span>
                  )}
                </button>

                {/* Interactive Simulation Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col gap-2">
                  <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white"
                      initial={{ width: '0%' }}
                      animate={{ width: isPlaying ? '100%' : '45%' }}
                      transition={{
                        duration: isPlaying ? 25 : 0,
                        ease: 'linear',
                        repeat: Infinity,
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-white/90 pt-1">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="font-mono text-[11px] sm:text-xs">
                        00:18 / {video.duration || '00:45'}
                      </span>
                      <span className="px-1.5 sm:px-2 py-0.5 rounded bg-white text-[9px] sm:text-[10px] font-bold text-black uppercase">
                        STUDIO PREVIEW
                      </span>
                    </div>
                    <span className="font-semibold text-white/90 text-[11px] sm:text-xs">
                      {video.stats || 'High Retention'}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Video Metadata & CTA Section */}
          <div className="p-5 sm:p-6 md:p-7 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-5 shrink-0">
            <div className="max-w-xl">
              <div className="text-[11px] text-[#71717a] font-bold uppercase tracking-wider mb-1">
                {video.creator || 'Motion Labs Production'}
              </div>
              <h3 className="font-sans text-xl sm:text-2xl text-[#09090b] font-bold tracking-tight mb-2">
                {video.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed line-clamp-2 sm:line-clamp-3">
                {video.description ||
                  'High-tempo retention edit with sound design, dynamic zooms, color-graded frames, and custom kinetic typography produced by Motion Labs.'}
              </p>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end gap-2.5 shrink-0">
              <a
                href="#contact"
                onClick={onClose}
                className="liquid-btn-primary text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-6 w-full text-center"
              >
                Request Edit →
              </a>
              <a
                href="https://wa.me/919310106145?text=Hi%20Motion%20Labs%2C%20I%20saw%20your%20reels%20and%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-[#09090b] hover:text-black underline transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
