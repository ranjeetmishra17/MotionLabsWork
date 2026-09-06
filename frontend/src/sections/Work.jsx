import { useState } from 'react'
import { motion } from 'framer-motion'

const PROJECTS = [
  {
    title: 'Nocturne Skincare — Radiance Series',
    category: 'Product Cinematography · UGC Ads',
    stats: '4.2x ROAS · 3.4M Views',
    client: 'Nocturne Skincare',
    thumb: 'radial-gradient(circle at center, #3a3a3a, #0a0a0a 75%)',
    filterTag: 'video',
  },
  {
    title: 'Ferro Mobility — Launch Commercial',
    category: 'Video Editing · 4K Color Grade',
    stats: '2.8M Views · 1.4K Preorders',
    client: 'Ferro Bikes',
    thumb: 'radial-gradient(circle at center, #262626, #000000 85%)',
    filterTag: 'video',
  },
  {
    title: 'Baseline Coffee — Organic Content Engine',
    category: 'SMM · Creator Shoots',
    stats: '+180K Community · 6.8% Engagement',
    client: 'Baseline Coffee Co.',
    thumb: 'radial-gradient(circle at center, #424242, #111111 80%)',
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
    <section id="work" className="py-24 md:py-32 bg-[#fafafb] border-t border-black/8 relative">
      <div className="container">
        {/* Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/8 shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-[#09090b]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#09090b]">
                Featured Case Studies
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#09090b] font-bold tracking-tight leading-[1.15]">
              <span>Shipped Work That</span>{' '}
              <span className="font-playfair italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#18181b] via-[#52525b] to-[#09090b]">
                Generated Real ROI.
              </span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-black/4 border border-black/8 rounded-full w-fit">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'video', label: 'Video & Film' },
              { id: 'smm', label: 'SMM & Content' },
              { id: 'web', label: 'Web Development' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all focus-ring cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#09090b] text-white shadow-md'
                    : 'text-[#71717a] hover:text-[#09090b] hover:bg-white'
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
              className="group relative aspect-[16/11] rounded-3xl overflow-hidden border border-black/10 shadow-lg hover:shadow-2xl hover:border-black/30 transition-all duration-300 cursor-pointer bg-[#09090b] focus-ring"
            >
              {/* Dynamic Thumbnail Canvas */}
              <div className="absolute inset-0" style={{ background: '#09090b' }} />
              <motion.div
                className="absolute inset-0"
                style={{ background: p.thumb }}
                initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                animate={{
                  clipPath: hovered === i ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Specular gloss top light */}
              <div className="specular-gloss" />

              {/* Top Tag Badges */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#09090b] shadow-md border border-white/20">
                  {p.client}
                </span>
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-xs font-bold text-white shadow-md">
                  {p.stats}
                </span>
              </div>

              {/* Central Play/Explore Overlay on Hover */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div
                  className={`w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-all duration-300 ${
                    hovered === i
                      ? 'scale-100 opacity-100 bg-white text-black shadow-xl ring-4 ring-white/40'
                      : 'scale-50 opacity-0'
                  }`}
                >
                  <span className="text-xl ml-0.5">▶</span>
                </div>
              </div>

              {/* Bottom Content Bar */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 bg-gradient-to-t from-black/95 via-black/45 to-transparent z-10">
                <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  {p.category}
                </p>
                <h3 className="font-sans text-2xl sm:text-3xl text-white font-bold tracking-tight group-hover:text-zinc-100 transition-colors">
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
