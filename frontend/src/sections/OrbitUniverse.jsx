import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Data for Testimonials Orbit
const TESTIMONIALS_NODES = [
  {
    id: 't1',
    type: 'testimonial',
    name: 'Aarav Sharma',
    role: 'Founder & CEO',
    org: 'Nocturne Skincare',
    avatar: 'AS',
    stat: '4.2x ROAS',
    quote:
      'We used to wait two weeks for a single edit. Motion Labs turns around a full week of high-retention Reels before our next shoot is even scheduled. Our CAC dropped 38%.',
    ring: 1, // inner ring
    angle: 0,
    accent: '#556b2f',
  },
  {
    id: 't2',
    type: 'testimonial',
    name: 'Priya Mehta',
    role: 'VP Marketing',
    org: 'Ferro Mobility',
    avatar: 'PM',
    stat: '2.8M Views',
    quote:
      'The launch film Motion Labs produced for our electric bike was pure cinema. It set our pre-order record within the first 48 hours of posting.',
    ring: 2, // middle ring
    angle: 120,
    accent: '#151813',
  },
  {
    id: 't3',
    type: 'testimonial',
    name: 'Rohan Gupta',
    role: 'Head of Growth',
    org: 'Baseline Coffee Co.',
    avatar: 'RG',
    stat: '+180K Followers',
    quote:
      'They rebuilt our content engine from scratch. The aesthetic is clean, modern, and our Instagram engagement rate jumped from 1.2% to 6.8%.',
    ring: 3, // outer ring
    angle: 240,
    accent: '#556b2f',
  },
  {
    id: 't4',
    type: 'testimonial',
    name: 'Elena Rostova',
    role: 'Creative Director',
    org: 'Harlow & Studio',
    avatar: 'ER',
    stat: '0.6s Load Time',
    quote:
      'They rebuilt our site in three weeks with zero page-builder bloat, and it finally loads as fast as it looks. Best technical production partner we have had.',
    ring: 2,
    angle: 300,
    accent: '#151813',
  },
]

// Data for Creators Orbit
const CREATORS_NODES = [
  {
    id: 'c1',
    type: 'creator',
    name: 'Devansh Tech',
    handle: '@devanshtech',
    stats: '1.4M Subscribers',
    category: 'Consumer Tech',
    avatar: 'DT',
    bio: 'Long-form weekly tech reviews and smartphone breakdowns with cinematic B-roll and kinetic motion graphics.',
    ring: 1,
    angle: 60,
    accent: '#556b2f',
  },
  {
    id: 'c2',
    type: 'creator',
    name: 'Kavya Money',
    handle: '@kavyagrows',
    stats: '820K Followers',
    category: 'Finance & Investing',
    avatar: 'KM',
    bio: 'High-retention talking head finance reels with bespoke animated charts, sound effects, and 70%+ completion rates.',
    ring: 2,
    angle: 180,
    accent: '#151813',
  },
  {
    id: 'c3',
    type: 'creator',
    name: 'The Fitness Protocol',
    handle: '@fitnessprotocol',
    stats: '650K Community',
    category: 'Health & Performance',
    avatar: 'FP',
    bio: 'Dynamic workout transformations and podcast cutdowns with synchronized typography.',
    ring: 3,
    angle: 330,
    accent: '#556b2f',
  },
  {
    id: 'c4',
    type: 'creator',
    name: 'Samar Explores',
    handle: '@samarexplores',
    stats: '2.1M Across Platforms',
    category: 'Travel & Documentary',
    avatar: 'SE',
    bio: 'Cinematic 4K travel vignettes, drone grading, and immersive audio masterclasses.',
    ring: 1,
    angle: 220,
    accent: '#151813',
  },
]

// Data for Brands Orbit
const BRANDS_NODES = [
  {
    id: 'b1',
    type: 'brand',
    name: 'Nocturne D2C',
    category: 'Beauty & Skincare',
    deliverable: 'Commercials & UGC',
    avatar: 'NC',
    tagline: 'Premium organic clinical skincare brand.',
    ring: 1,
    angle: 150,
    accent: '#556b2f',
  },
  {
    id: 'b2',
    type: 'brand',
    name: 'Ferro Bikes',
    category: 'Clean Mobility',
    deliverable: 'Launch Film & Ad Edits',
    avatar: 'FB',
    tagline: 'Urban electric commuter mobility ecosystem.',
    ring: 2,
    angle: 40,
    accent: '#151813',
  },
  {
    id: 'b3',
    type: 'brand',
    name: 'Baseline Coffee',
    category: 'Specialty Beverage',
    deliverable: 'SMM & Content Shoots',
    avatar: 'BC',
    tagline: 'Single-origin craft roasted coffees.',
    ring: 3,
    angle: 130,
    accent: '#556b2f',
  },
  {
    id: 'b4',
    type: 'brand',
    name: 'HyperDrive AI',
    category: 'Enterprise SaaS',
    deliverable: 'Product Keynote & Web',
    avatar: 'HD',
    tagline: 'Next-generation AI workflow automation.',
    ring: 3,
    angle: 20,
    accent: '#151813',
  },
]

export default function OrbitUniverse() {
  const [activeTab, setActiveTab] = useState('all') // 'all' | 'testimonials' | 'creators' | 'brands'
  const [selectedNode, setSelectedNode] = useState(TESTIMONIALS_NODES[0])
  const [isPaused, setIsPaused] = useState(false)

  // Filter nodes based on activeTab
  const getVisibleNodes = () => {
    if (activeTab === 'testimonials') return TESTIMONIALS_NODES
    if (activeTab === 'creators') return CREATORS_NODES
    if (activeTab === 'brands') return BRANDS_NODES
    return [...TESTIMONIALS_NODES, ...CREATORS_NODES, ...BRANDS_NODES]
  }

  const visibleNodes = getVisibleNodes()

  return (
    <section id="orbit" className="py-24 md:py-32 bg-[#fbfcf9] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-dots-light opacity-60 pointer-events-none" />

      <div className="container relative z-10">
        {/* Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#556b2f] animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#151813]">
              Interactive Orbit Universe
            </span>
          </div>

          <h2 className="display text-3xl sm:text-4xl md:text-5xl text-[#151813]">
            The Brands, Creators & Voices in Our Orbit.
          </h2>

          <p className="mt-4 text-base text-[#565e53]">
            Explore our ecosystem of category-leading brands, top creators, and client reviews rotating in live planetary orbit.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#f4f6f0] border border-black/8 rounded-full shadow-inner">
            {[
              { id: 'all', label: '🌌 All Orbit' },
              { id: 'testimonials', label: '⭐ Testimonials' },
              { id: 'creators', label: '🎬 Top Creators' },
              { id: 'brands', label: '🏢 Brands' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all focus-ring ${
                  activeTab === tab.id
                    ? 'bg-[#151813] text-white shadow-md'
                    : 'text-[#565e53] hover:text-[#151813] hover:bg-white/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Orbit Canvas & Spotlight Grid */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Orbit System Container */}
          <div
            className={`relative aspect-square max-w-[580px] mx-auto w-full flex items-center justify-center p-4 rounded-3xl border border-black/8 bg-white/90 backdrop-blur-sm shadow-xl ${
              isPaused ? 'orbit-paused' : ''
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Center Core: Motion Labs Sun */}
            <div className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#151813] text-white flex flex-col items-center justify-center text-center shadow-2xl border-4 border-[#556b2f]/30 cursor-pointer group">
              <div className="absolute inset-0 rounded-full bg-[#556b2f]/30 animate-ping opacity-60 pointer-events-none" />
              <span className="display text-base sm:text-lg font-bold text-white group-hover:text-[#556b2f] transition-colors leading-tight">
                MOTION<br />LABS
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#556b2f] font-semibold mt-0.5">
                Studio Core
              </span>
            </div>

            {/* Orbit Ring 1 (Inner Track) */}
            <div className="absolute w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] rounded-full border border-dashed border-black/20 pointer-events-none animate-orbit-1">
              {visibleNodes
                .filter((n) => n.ring === 1)
                .map((node, i) => (
                  <OrbitNode
                    key={node.id}
                    node={node}
                    index={i}
                    total={visibleNodes.filter((n) => n.ring === 1).length}
                    counterClass="counter-orbit-1"
                    isSelected={selectedNode?.id === node.id}
                    onSelect={() => setSelectedNode(node)}
                  />
                ))}
            </div>

            {/* Orbit Ring 2 (Middle Track) */}
            <div className="absolute w-[340px] h-[340px] sm:w-[410px] sm:h-[410px] rounded-full border border-dashed border-[#556b2f]/30 pointer-events-none animate-orbit-2">
              {visibleNodes
                .filter((n) => n.ring === 2)
                .map((node, i) => (
                  <OrbitNode
                    key={node.id}
                    node={node}
                    index={i}
                    total={visibleNodes.filter((n) => n.ring === 2).length}
                    counterClass="counter-orbit-2"
                    isSelected={selectedNode?.id === node.id}
                    onSelect={() => setSelectedNode(node)}
                  />
                ))}
            </div>

            {/* Orbit Ring 3 (Outer Track) */}
            <div className="absolute w-[450px] h-[450px] sm:w-[540px] sm:h-[540px] rounded-full border border-dashed border-black/15 pointer-events-none animate-orbit-3">
              {visibleNodes
                .filter((n) => n.ring === 3)
                .map((node, i) => (
                  <OrbitNode
                    key={node.id}
                    node={node}
                    index={i}
                    total={visibleNodes.filter((n) => n.ring === 3).length}
                    counterClass="counter-orbit-3"
                    isSelected={selectedNode?.id === node.id}
                    onSelect={() => setSelectedNode(node)}
                  />
                ))}
            </div>

            {/* Orbit Speed & Interaction Helper Overlay */}
            <div className="absolute bottom-4 right-4 z-20 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full border border-black/10 text-[11px] font-medium text-[#565e53] shadow-sm">
              {isPaused ? '⏸ Orbit Paused (Click node to inspect)' : '🔄 Rotating (Hover to freeze)'}
            </div>
          </div>

          {/* Interactive Spotlight Card */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              {selectedNode && (
                <motion.div
                  key={selectedNode.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="liquid-card p-6 sm:p-8 relative overflow-hidden bg-white/95 border-black/8 shadow-xl"
                >
                  {/* Subtle Olive Glow Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#556b2f]/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Badge & Type */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151813] text-white text-xs font-semibold uppercase tracking-wider">
                      {selectedNode.type === 'testimonial' && '⭐ Verified Client Testimonial'}
                      {selectedNode.type === 'creator' && '🎬 Partnered Creator'}
                      {selectedNode.type === 'brand' && '🏢 Featured Brand'}
                    </span>
                    {selectedNode.stat && (
                      <span className="text-xs font-bold text-[#556b2f] px-3 py-1 rounded-full bg-[#556b2f]/10 border border-[#556b2f]/20">
                        {selectedNode.stat}
                      </span>
                    )}
                    {selectedNode.stats && (
                      <span className="text-xs font-bold text-[#556b2f] px-3 py-1 rounded-full bg-[#556b2f]/10 border border-[#556b2f]/20">
                        {selectedNode.stats}
                      </span>
                    )}
                  </div>

                  {/* Quote or Bio Content */}
                  {selectedNode.quote && (
                    <blockquote className="display text-xl sm:text-2xl text-[#151813] leading-snug mb-6">
                      "{selectedNode.quote}"
                    </blockquote>
                  )}

                  {selectedNode.bio && (
                    <p className="text-base text-[#565e53] leading-relaxed mb-6">
                      {selectedNode.bio}
                    </p>
                  )}

                  {selectedNode.tagline && (
                    <p className="display text-xl text-[#151813] leading-relaxed mb-6">
                      "{selectedNode.tagline}"
                    </p>
                  )}

                  {/* Node Profile Footer */}
                  <div className="pt-6 border-t border-black/8 flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-md"
                        style={{
                          backgroundColor: selectedNode.accent === '#556b2f' ? '#556b2f' : '#151813',
                          color: '#ffffff',
                        }}
                      >
                        {selectedNode.avatar}
                      </div>
                      <div>
                        <h4 className="display text-lg text-[#151813]">{selectedNode.name}</h4>
                        <p className="text-xs text-[#565e53] font-medium">
                          {selectedNode.role ? `${selectedNode.role} · ${selectedNode.org}` : selectedNode.handle || selectedNode.category}
                        </p>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className="liquid-btn-primary text-xs py-2.5 px-4 focus-ring"
                    >
                      Work With Us →
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Node Selector Pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-xs font-semibold text-[#565e53] py-1.5 self-center">
                Quick Select:
              </span>
              {visibleNodes.slice(0, 5).map((n) => (
                <button
                  key={n.id}
                  onClick={() => setSelectedNode(n)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                    selectedNode?.id === n.id
                      ? 'border-[#556b2f] bg-[#556b2f]/10 text-[#556b2f] font-bold shadow-sm'
                      : 'border-black/10 bg-white text-[#565e53] hover:border-black'
                  }`}
                >
                  {n.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OrbitNode({ node, index, total, counterClass, isSelected, onSelect }) {
  // Compute position along circular ring
  const angle = (360 / total) * index + (node.angle || 0)
  const rad = (angle * Math.PI) / 180
  
  // Position as percentage from center (50% + cos/sin * 50%)
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
          onClick={onSelect}
          className={`relative group rounded-full p-1.5 transition-all duration-300 flex items-center justify-center focus-ring ${
            isSelected
              ? 'scale-125 ring-4 ring-[#556b2f] shadow-lg'
              : 'hover:scale-115 hover:ring-2 hover:ring-black'
          }`}
          style={{
            backgroundColor: node.accent === '#556b2f' ? '#556b2f' : '#151813',
            color: '#ffffff',
            width: '42px',
            height: '42px',
          }}
          title={`${node.name} (${node.type})`}
        >
          <span className="text-xs font-bold leading-none">{node.avatar}</span>

          {/* Mini tooltip indicator */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#151813] text-white text-[10px] font-semibold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            {node.name}
          </div>
        </button>
      </div>
    </div>
  )
}
