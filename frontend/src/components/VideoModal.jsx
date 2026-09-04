import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function VideoModal({ video, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)

  if (!video) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#111317] rounded-3xl overflow-hidden shadow-2xl border border-white/15 z-10 text-white"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0c0d10]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5500] animate-pulse" />
              <p className="text-xs font-semibold uppercase tracking-wider text-white">
                {video.category || 'Production Showcase'} · {video.duration || '0:45'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#ff5500] text-white flex items-center justify-center transition-colors focus-ring cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          {/* Video Player Display */}
          <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
            {/* Visual simulation / gradient video background */}
            <div
              className="absolute inset-0 opacity-85 transition-transform duration-700 group-hover:scale-105"
              style={{
                background: video.bgGradient || 'radial-gradient(circle at center, #2a2a2a, #0a0a0c)',
              }}
            />

            {/* Dynamic Animated Motion Canvas simulation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="relative w-48 h-48 rounded-full border border-white/20 flex items-center justify-center animate-spin"
                style={{ animationDuration: '20s' }}
              >
                <div className="w-32 h-32 rounded-full border border-[#ff5500]/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#ff5500]/25 blur-md" />
                </div>
              </div>
            </div>

            {/* Central Play/Pause Overlay */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="relative z-10 w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer hover:bg-[#ff5500] hover:text-white"
            >
              {isPlaying ? (
                <span className="text-xl font-bold">❚❚</span>
              ) : (
                <span className="text-2xl ml-1">▶</span>
              )}
            </button>

            {/* Player Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col gap-2">
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#ff5500]"
                  initial={{ width: '0%' }}
                  animate={{ width: isPlaying ? '100%' : '45%' }}
                  transition={{ duration: isPlaying ? 25 : 0, ease: 'linear', repeat: Infinity }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-white/90 pt-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono">00:18 / {video.duration || '00:45'}</span>
                  <span className="px-2 py-0.5 rounded bg-[#ff5500] text-[10px] font-bold text-white uppercase">
                    4K MASTER
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="hover:text-[#ff5500] transition-colors cursor-pointer"
                  >
                    {isMuted ? '🔇 Unmute' : '🔊 Mute'}
                  </button>
                  <span className="font-semibold text-white/90">{video.stats || '2.4M Views'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Metadata & Impact Details */}
          <div className="p-6 md:p-8 bg-[#111317] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-xs text-[#ff5500] font-bold uppercase tracking-wider mb-1">
                {video.creator}
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl text-white font-bold mb-2">
                {video.title}
              </h3>
              <p className="text-sm text-[#9ca3af] max-w-xl leading-relaxed">
                {video.description ||
                  'High-tempo retention edit with sound design, dynamic zooms, color-graded frames, and custom kinetic typography produced by Motion Labs.'}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#contact"
                onClick={onClose}
                className="liquid-btn-primary text-sm py-3 px-6"
              >
                Request Similar Edit →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
