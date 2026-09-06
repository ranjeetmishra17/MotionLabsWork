import { InstagramIcon, WhatsAppIcon, LinkedInIcon } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-[#09090b] text-white border-t border-white/10 py-14">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                M
              </div>
              <span className="display text-lg font-bold text-white tracking-tight">
                Motion Labs
              </span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm">
              High-velocity video editing, commercial shoots & digital platforms. Based in New Delhi, producing globally.
            </p>
          </div>

          {/* Nav Links: Same 4 as Navbar */}
          <div className="flex flex-wrap justify-center gap-7 text-sm font-medium text-neutral-300">
            <a href="#portfolio" className="hover:text-white transition-colors focus-ring">
              Portfolio
            </a>
            <a href="#clients" className="hover:text-white transition-colors focus-ring">
              Clients
            </a>
            <a href="#testimonials" className="hover:text-white transition-colors focus-ring">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-white transition-colors focus-ring">
              Contact
            </a>
          </div>

          {/* Social Logos: Icon-only in slightly bigger size */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://wa.me/919999999999?text=Hi%20Motion%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/15 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all shadow-md focus-ring group"
              aria-label="WhatsApp Studio Desk"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://instagram.com/motionlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/15 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all shadow-md focus-ring group"
              aria-label="Instagram Profile"
              title="Instagram"
            >
              <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/company/motionlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/15 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all shadow-md focus-ring group"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Motion Labs Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-white transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
