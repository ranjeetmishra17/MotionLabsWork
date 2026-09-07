import { InstagramIcon, WhatsAppIcon, LinkedInIcon } from './SocialIcons'
import logoImg from '../assets/Black Without BG.png'

export default function Footer() {
  return (
    <footer className="bg-[#09090b] text-white border-t border-white/10 py-14">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2.5">
            <a href="#top" className="flex items-center group focus-ring">
              <img
                src={logoImg}
                alt="Motion Labs"
                className="h-8 sm:h-9 md:h-10 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-all"
              />
            </a>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm">
              High-velocity video editing, commercial shoots & digital platforms. Based in New Delhi, producing globally.
            </p>
            <div className="flex items-center gap-3 pt-0.5 text-xs text-neutral-400">
              <a
                href="https://wa.me/919310106145?text=Hi%20Motion%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2 font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>+91 93101 06145</span>
              </a>
            </div>
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

          {/* Social Logos: Balanced Icon Buttons */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://wa.me/919310106145?text=Hi%20Motion%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/15 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all shadow-md focus-ring group"
              aria-label="WhatsApp Studio Desk (+91 93101 06145)"
              title="WhatsApp: +91 93101 06145"
            >
              <WhatsAppIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.instagram.com/motionlabs.work/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/15 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all shadow-md focus-ring group"
              aria-label="Instagram Profile (@motionlabs.work)"
              title="Instagram: @motionlabs.work"
            >
              <InstagramIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/motion-labs-26623b418/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/15 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all shadow-md focus-ring group"
              aria-label="LinkedIn Profile"
              title="LinkedIn: Motion Labs"
            >
              <LinkedInIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 group-hover:scale-110 transition-transform" />
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
