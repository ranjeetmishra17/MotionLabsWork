import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import channelLogo from '../assets/channel-logo.jpg'

// ─── YouTube ID extractor ───────────────────────────────────────────────────
function extractYouTubeId(video) {
  if (!video) return null
  if (video.youtubeId && typeof video.youtubeId === 'string') {
    const raw = video.youtubeId.trim()
    if (raw.length === 11 && !raw.includes('/') && !raw.includes('.')) return raw
  }
  const candidate = video.youtubeId || video.youtubeUrl || video.url || video.videoUrl
  if (typeof candidate !== 'string') return null
  const match = candidate.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\\w-]{11})/
  )
  return match ? match[1] : null
}

// ─── Vimeo ID extractor ─────────────────────────────────────────────────────
function extractVimeoId(video) {
  if (!video) return null
  if (video.vimeoId) return String(video.vimeoId)
  const candidate = video.vimeoUrl || video.url || ''
  if (typeof candidate !== 'string') return null
  const match = candidate.match(/vimeo\.com\/(\d+)/)
  return match ? match[1] : null
}

export default function VideoModal({ video, onClose }) {
  // ── ALL hooks must be at the top — before any early return ──────────────
  const [iframeReady, setIframeReady] = useState(false)
  const [muted, setMuted] = useState(false)
  const [vimeoThumb, setVimeoThumb] = useState(null)

  const youtubeId = extractYouTubeId(video)
  const vimeoId   = !youtubeId ? extractVimeoId(video) : null

  // Reset ready state when video changes
  useEffect(() => {
    setIframeReady(false)
  }, [video?.youtubeId, video?.vimeoId])

  // Fetch Vimeo thumbnail (free oEmbed API, no auth needed for public videos)
  useEffect(() => {
    if (!vimeoId) { setVimeoThumb(null); return }
    let cancelled = false
    fetch(`https://vimeo.com/api/v2/video/${vimeoId}.json`)
      .then(r => r.json())
      .then(data => {
        if (!cancelled) {
          setVimeoThumb(data[0]?.thumbnail_large || data[0]?.thumbnail_medium || null)
        }
      })
      .catch(() => { if (!cancelled) setVimeoThumb(null) })
    return () => { cancelled = true }
  }, [vimeoId])

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  // ── Early return AFTER all hooks ─────────────────────────────────────────
  if (!video) return null

  const isVimeo   = Boolean(vimeoId)
  const isYouTube = Boolean(youtubeId)

  // ── Thumbnails ────────────────────────────────────────────────────────────
  const ytThumb    = isYouTube ? `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg` : null
  const ytFallback = isYouTube ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : null
  const thumbSrc     = isYouTube ? ytThumb   : (vimeoThumb || null)
  const thumbFallback = isYouTube ? ytFallback : null

  // ── Embed src ─────────────────────────────────────────────────────────────
  // YouTube: controls=0 removes all YouTube UI chrome (title, channel name, avatar)
  const ytSrc = isYouTube
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=${youtubeId}&mute=${muted ? 1 : 0}`
    : null

  // Vimeo: title=0, byline=0, portrait=0 hides Vimeo branding
  const vimeoSrc = isVimeo
    ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1&loop=1&autopause=0&muted=${muted ? 1 : 0}&title=0&byline=0&portrait=0`
    : null

  const embedSrc = ytSrc || vimeoSrc

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* ── Modal shell — 9:16 for YouTube Shorts, 16:9 for Vimeo brand films ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/15 z-10 my-auto w-full"
          style={{
            aspectRatio: isVimeo ? '16 / 9' : '9 / 16',
            maxWidth: isVimeo ? '860px' : '420px',
          }}
        >
          {/* ── Layer 1: Thumbnail — shown instantly, fades out when iframe ready ── */}
          {thumbSrc && (
            <img
              src={thumbSrc}
              alt="Video preview"
              onError={thumbFallback ? (e) => { e.target.src = thumbFallback } : undefined}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              style={{ opacity: iframeReady ? 0 : 1, zIndex: 1 }}
            />
          )}

          {/* Gradient placeholder for Vimeo while thumbnail fetches */}
          {isVimeo && !thumbSrc && (
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                opacity: iframeReady ? 0 : 1,
                zIndex: 1,
                background: video.bgGradient || 'radial-gradient(circle at center, #1f1f23, #09090b)',
              }}
            />
          )}

          {/* ── Layer 2: Loading spinner ── */}
          {!iframeReady && (
            <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
              <div className="bg-black/60 backdrop-blur-sm rounded-full p-4">
                <svg className="w-8 h-8 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              </div>
            </div>
          )}

          {/* ── Layer 3: Iframe — fades in once loaded ── */}
          {embedSrc && (
            <iframe
              key={`${youtubeId || vimeoId}-${muted}`}
              src={embedSrc}
              title="Motion Labs Video"
              className="absolute inset-0 w-full h-full border-0 transition-opacity duration-500"
              style={{ opacity: iframeReady ? 1 : 0, zIndex: 3 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              onLoad={() => setTimeout(() => setIframeReady(true), 400)}
            />
          )}

          {/* ── Layer 4: Motion Labs Channel Bar — always on top ── */}
          <div
            className="absolute top-0 left-0 right-0 flex items-center justify-between px-4"
            style={{
              height: '68px',
              background: 'rgba(9,9,11,0.92)',
              backdropFilter: 'blur(12px)',
              zIndex: 40,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/20 shadow-lg shrink-0 bg-white flex items-center justify-center">
                <img src={channelLogo} alt="Motion Labs" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col leading-tight">
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] font-bold text-white tracking-wide">Motion Labs</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                </div>
                <span className="text-[10px] text-zinc-400 font-medium">
                  {isVimeo ? 'Brand Film · Vimeo 4K' : 'Official Channel'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMuted(!muted)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/10 cursor-pointer"
                aria-label={muted ? 'Unmute' : 'Mute'}
              >
                <span className="text-xs">{muted ? '🔇' : '🔊'}</span>
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all border border-white/15 cursor-pointer shadow-md"
                aria-label="Close video player"
              >
                <span className="text-sm font-bold leading-none">✕</span>
              </button>
            </div>
          </div>

          {/* ── Bottom gradient ── */}
          <div
            className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(9,9,11,0.5), transparent)', zIndex: 35 }}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
