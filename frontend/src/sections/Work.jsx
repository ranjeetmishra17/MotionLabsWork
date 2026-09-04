import { useState } from 'react'
import { motion } from 'framer-motion'

const PROJECTS = [
  {
    title: 'Nocturne Skincare — Radiance Series',
    category: 'Product Cinematography · UGC Ads',
    stats: '4.2x ROAS · 3.4M Views',
    client: 'Nocturne Skincare',
    thumb: 'radial-gradient(circle at center, #ff5500, #0a0a0a 75%)',
    filterTag: 'video',
  },
  {
    title: 'Ferro Mobility — Launch Commercial',
    category: 'Video Editing · 4K Color Grade',
    stats: '2.8M Views · 1.4K Preorders',
    client: 'Ferro Bikes',
    thumb: 'radial-gradient(circle at center, #1a1a1a, #000000 85%)',
    filterTag: 'video',
  },
  {
    title: 'Baseline Coffee — Organic Content Engine',
    category: 'SMM · Creator Shoots',
    stats: '+180K Community · 6.8% Engagement',
    client: 'Baseline Coffee Co.',
    thumb: 'radial-gradient(circle at center, #ff6600, #111111 80%)',
    filterTag: 'smm',
  },
  {
    title: 'Harlow & Co. — Interactive Flagship Web',
    category: 'Website Development · Custom Motion',
    stats: '0.6s Speed · 99 Performance',
    client: 'Harlow Studio',
    thumb: 'radial-gradient(circle at center, #333333, #0a0a0a 80%)',
    filterTag: 'web',
  },
]

export default function Work({ onSelectVideo }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [hovered, setHovered] = useState(null)

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.filterTag === activeFilter)

  return (
    <section id="work" className="py-24 md:py-32 bg-white border-t border-black/8 relative">
      <div className="container">
        {/* Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f6f6f8] border border-black/10 shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-black">
                Featured Case Studies
              </span>
            </div>
            <h2 className="display text-3xl sm:text-4xl md:text-5xl text-black">
              Shipped Work That Generated Real ROI.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#f6f6f8] border border-black/10 rounded-full w-fit">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'video', label: 'Video & Film' },
              { id: 'smm', label: 'SMM & Content' },
              { id: 'web', label: 'Web Development' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all focus-ring ${
                  activeFilter === f.id
                    ? 'bg-black text-white shadow-md'
                    : 'text-[#4a4a52] hover:text-black hover:bg-white/60'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {filteredProjects.map((p, i) => (
            <div
              key={p.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => {
                if (onSelectVideo) {
                  onSelectVideo({
                    title: p.title,
                    category: p.category,
                    stats: p.stats,
                    creator: p.client,
                    bgGradient: p.thumb,
                  })
                }
              }}
              className="group relative aspect-[16/11] rounded-3xl overflow-hidden border border-black/10 shadow-lg cursor-pointer bg-black focus-ring"
            >
              {/* Dynamic Thumbnail Canvas */}
              <div className="absolute inset-0" style={{ background: '#0a0a0a' }} />
              <motion.div
                className="absolute inset-0"
                style={{ background: p.thumb }}
                initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                animate={{
                  clipPath: hovered === i ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Top Tag Badges */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-black shadow-md">
                  {p.client}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#ff5500] text-xs font-bold text-white shadow-md">
                  {p.stats}
                </span>
              </div>

              {/* Central Play/Explore Overlay on Hover */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div
                  className={`w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-all duration-300 ${
                    hovered === i ? 'scale-100 opacity-100 bg-[#ff5500] text-white' : 'scale-50 opacity-0'
                  }`}
                >
                  <span className="text-xl ml-0.5">▶</span>
                </div>
              </div>

              {/* Bottom Content Bar */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10">
                <p className="text-xs font-semibold text-[#ff5500] uppercase tracking-wider mb-2">
                  {p.category}
                </p>
                <h3 className="display text-2xl sm:text-3xl text-white group-hover:text-white/95 transition-colors">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
