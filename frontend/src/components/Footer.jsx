export default function Footer() {
  return (
    <footer className="bg-[#f3f5ef] border-t border-black/8 py-14">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#556b2f] text-white font-bold text-xs flex items-center justify-center shadow-sm">
                M
              </div>
              <span className="display text-lg font-bold text-[#151813] tracking-tight">
                Motion Labs
              </span>
            </div>
            <p className="text-xs text-[#565e53] max-w-sm">
              High-velocity video editing, commercial shoots & digital platforms. Based in New Delhi, producing globally.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-7 text-sm font-medium text-[#565e53]">
            <a href="#videos" className="hover:text-[#556b2f] transition-colors focus-ring">
              Reels
            </a>
            <a href="#services" className="hover:text-[#556b2f] transition-colors focus-ring">
              Services
            </a>
            <a href="#brands-orbit" className="hover:text-[#556b2f] transition-colors focus-ring">
              Brands
            </a>
            <a href="#creators-orbit" className="hover:text-[#556b2f] transition-colors focus-ring">
              Creators
            </a>
            <a href="#testimonials" className="hover:text-[#556b2f] transition-colors focus-ring">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-[#556b2f] transition-colors focus-ring">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 text-xs font-semibold text-[#151813]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full border border-black/10 hover:border-[#556b2f] hover:text-[#556b2f] transition-colors focus-ring"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full border border-black/10 hover:border-[#556b2f] hover:text-[#556b2f] transition-colors focus-ring"
            >
              YouTube
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full border border-black/10 hover:border-[#556b2f] hover:text-[#556b2f] transition-colors focus-ring"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-10 pt-6 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7d8778]">
          <p>© {new Date().getFullYear()} Motion Labs Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-[#556b2f] transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
