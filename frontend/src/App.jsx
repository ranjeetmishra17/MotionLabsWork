import { useState } from 'react'
import GooFilters from './components/GooFilters'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import VideoModal from './components/VideoModal'
import Hero from './sections/Hero'
import StatsCounter from './components/StatsCounter'
import MovingVideos from './sections/MovingVideos'
import Services from './sections/Services'
import BrandsOrbit from './sections/BrandsOrbit'
import CreatorsOrbit from './sections/CreatorsOrbit'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

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
      bgGradient: 'radial-gradient(circle at 40% 40%, #556b2f, #19220e 80%)',
      description:
        'A comprehensive showcase of high-retention video edits, commercial shoots, 3D product animations, and brand launches produced by Motion Labs.',
    })
  }

  const handlePlayVideo = (video) => {
    setActiveVideo(video)
  }

  return (
    <div className="min-h-screen bg-[#fbfcf9] text-[#151813] selection:bg-[#556b2f] selection:text-white">
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

        {/* 5. Top Brands Orbit */}
        <BrandsOrbit onPlayVideo={handlePlayVideo} />

        {/* 6. Top Creators Orbit */}
        <CreatorsOrbit onPlayVideo={handlePlayVideo} />

        {/* 7. Dedicated Testimonials Section */}
        <Testimonials />

        {/* 8. Contact Inquiry Form */}
        <Contact />
      </main>

      {/* Clean Dark Footer */}
      <Footer />

      {/* Fullscreen Interactive Video Player Modal */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </div>
  )
}
