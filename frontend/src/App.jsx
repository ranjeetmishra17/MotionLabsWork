import { useState } from 'react'
import GooFilters from './components/GooFilters'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import VideoModal from './components/VideoModal'
import Hero from './components/Hero'
import StatsCounter from './components/StatsCounter'
import MovingVideos from './sections/MovingVideos'
import Services from './sections/Services'
import Orbits from './sections/Orbits'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import { WhatsAppIcon } from './components/SocialIcons'

export default function App() {
  const [activeVideo, setActiveVideo] = useState(null)

  const handleOpenShowreel = () => {
    setActiveVideo({
      id: 'showreel-2026',
      title: 'Motion Labs — Official 2026 Studio Reel',
      category: 'Commercial & Viral Showreel',
      duration: '01:15',
      creator: 'Motion Labs Production',
      stats: '150+ Projects Across 2025–2026',
      isVertical: false, // 16:9 widescreen showcase
      youtubeId: '', // Paste your YouTube showreel ID here (e.g. 'dQw4w9WgXcQ')
      bgGradient: 'radial-gradient(circle at 40% 40%, #383838, #0e0e0e 80%)',
      description:
        'A comprehensive showcase of high-retention video edits, commercial shoots, 3D product animations, and brand launches produced by Motion Labs.',
    })
  }

  const handlePlayVideo = (video) => {
    setActiveVideo(video)
  }

  return (
    <div className="min-h-screen bg-[#fafafb] text-[#09090b] selection:bg-black selection:text-white">
      {/* SVG Gooey Liquid Filter System */}
      <GooFilters />

      {/* Light Liquid Navigation Bar */}
      <Navbar onOpenShowreel={handleOpenShowreel} />

      {/* Main Experience Flow */}
      <main>
        {/* 1. Premium Centered Hero Section */}
        <Hero onOpenShowreel={handleOpenShowreel} />

        {/* 2. Running Animated Stats Counter (Pulled down with generous spacing) */}
        <StatsCounter />

        {/* 3. Vertical Moving Reels Section */}
        <MovingVideos onSelectVideo={handlePlayVideo} />

        {/* 4. Services Section (Directly after Reels) */}
        <Services />

        {/* 5. Top Brands & Creators Orbits (Side by Side) */}
        <Orbits onPlayVideo={handlePlayVideo} />

        {/* 6. Dedicated Testimonials Section */}
        <Testimonials />

        {/* 7. Contact Inquiry Form */}
        <Contact />
      </main>

      {/* Clean Dark Footer */}
      <Footer />

      {/* Fullscreen Interactive Video Player Modal */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />

      {/* Floating Studio WhatsApp Button in Shades of Black */}
      <a
        href="https://wa.me/919310106145?text=Hi%20Motion%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-b from-[#27272a] via-[#18181b] to-[#09090b] py-2.5 px-4 rounded-full flex items-center gap-2.5 shadow-2xl hover:scale-105 active:scale-95 transition-all text-xs font-semibold text-white hover:text-white border border-white/15 hover:border-[#25D366]/50 group"
        aria-label="Chat with Motion Labs on WhatsApp (+91 93101 06145)"
        title="WhatsApp: +91 93101 06145"
        style={{ color: '#ffffff' }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
        </span>
        <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline font-bold text-white" style={{ color: '#ffffff' }}>Studio WhatsApp</span>
      </a>
    </div>
  )
}
