import { InstagramIcon, WhatsAppIcon, LinkedInIcon, EmailIcon } from '../components/SocialIcons'
import WorldMap from '../components/WorldMap'

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#fafafb] border-t border-black/8 relative">
      <div className="container">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill mb-4">
            <span className="w-2 h-2 rounded-full bg-[#09090b] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#09090b]">
              Global Footprint · Direct Studio Access
            </span>
          </div>

          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#09090b] font-bold tracking-tight leading-[1.15] mx-auto max-w-4xl">
            <span>Worldwide Impact,</span>{' '}
            <span className="font-playfair italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#18181b] via-[#52525b] to-[#09090b]">
              Direct Collaboration.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#52525b] max-w-2xl mx-auto mt-4 leading-relaxed">
            Delivering high-retention video edits, commercial shoots, and motion UI for top creators and visionary brands across 8+ countries worldwide.
          </p>
        </div>

        {/* Studio Channels + World Map Grid: Exactly Matched Heights */}
        <div className="grid lg:grid-cols-[405px_1fr] gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {/* Left Info Column: Matching Height with Right Card */}
          <div className="liquid-card p-6 sm:p-8 flex flex-col justify-between h-full">
            <div>
              <div className="inline-block px-2.5 py-1 rounded-md bg-black/5 text-[#09090b] text-[11px] font-bold uppercase tracking-wider mb-2">
                New Delhi Studio HQ
              </div>
              <h3 className="text-lg font-bold text-[#09090b]">Direct Studio Channels</h3>
            </div>

            {/* Direct Channels evenly spaced to match full height */}
            <div className="space-y-3.5 text-sm text-[#52525b] border-t border-black/8 pt-5 flex-1 flex flex-col justify-between">
              {/* WhatsApp: Green Logo Icon, Neutral Text */}
              <a
                href="https://wa.me/919310106145?text=Hi%20Motion%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-pill p-3.5 rounded-2xl flex items-center justify-between gap-3 group cursor-pointer hover:border-black/30 transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="w-11 h-11 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-5.5 h-5.5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] text-[#71717a] uppercase font-semibold">WhatsApp Direct Desk</p>
                    <p className="text-[#09090b] font-semibold text-sm group-hover:text-black transition-colors whitespace-nowrap">+91 93101 06145</p>
                  </div>
                </div>
                <span className="text-xs text-[#71717a] group-hover:text-[#09090b] font-semibold transition-colors shrink-0 whitespace-nowrap">Chat →</span>
              </a>

              {/* Studio Phone */}
              <a
                href="tel:+919310106145"
                className="liquid-glass-pill p-3.5 rounded-2xl flex items-center justify-between gap-3 group cursor-pointer hover:border-black/30 transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="w-11 h-11 rounded-2xl bg-black/5 border border-black/8 flex items-center justify-center text-[#09090b] shrink-0 group-hover:scale-105 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] text-[#71717a] uppercase font-semibold">Studio Phone</p>
                    <p className="text-[#09090b] font-semibold text-sm group-hover:text-black transition-colors whitespace-nowrap">+91 93101 06145</p>
                  </div>
                </div>
                <span className="text-xs text-[#71717a] group-hover:text-[#09090b] font-semibold transition-colors shrink-0 whitespace-nowrap">Call →</span>
              </a>

              {/* Instagram: Sunset Gradient Logo Icon, Neutral Text */}
              <a
                href="https://www.instagram.com/motionlabs.work/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-pill p-3.5 rounded-2xl flex items-center justify-between gap-3 group cursor-pointer hover:border-black/30 transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#f09433]/15 via-[#dc2743]/15 to-[#bc1888]/15 border border-[#dc2743]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-5.5 h-5.5" id="contactInsta" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] text-[#71717a] uppercase font-semibold">Reels & Showreel</p>
                    <p className="text-[#09090b] font-semibold text-sm group-hover:text-black transition-colors whitespace-nowrap">@motionlabs.work</p>
                  </div>
                </div>
                <span className="text-xs text-[#71717a] group-hover:text-[#09090b] font-semibold transition-colors shrink-0 whitespace-nowrap">Follow →</span>
              </a>

              {/* LinkedIn: Blue Logo Icon, Neutral Text */}
              <a
                href="https://www.linkedin.com/in/motion-labs-993122437"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-pill p-3.5 rounded-2xl flex items-center justify-between gap-3 group cursor-pointer hover:border-black/30 transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="w-11 h-11 rounded-2xl bg-[#0A66C2]/10 border border-[#0A66C2]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedInIcon className="w-5.5 h-5.5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] text-[#71717a] uppercase font-semibold">B2B & Partnerships</p>
                    <p className="text-[#09090b] font-semibold text-sm group-hover:text-black transition-colors whitespace-nowrap">Motion Labs</p>
                  </div>
                </div>
                <span className="text-xs text-[#71717a] group-hover:text-[#09090b] font-semibold transition-colors shrink-0 whitespace-nowrap">Connect →</span>
              </a>

              {/* Direct Email: Theme-Colored Email Logo & Bordered Pill */}
              <a
                href="mailto:support@motionlabswork.com"
                className="liquid-glass-pill p-3.5 rounded-2xl flex items-center justify-between gap-3 group cursor-pointer hover:border-black/30 transition-all"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="w-11 h-11 rounded-2xl bg-[#EA4335]/10 border border-[#EA4335]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <EmailIcon className="w-5.5 h-5.5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] text-[#71717a] uppercase font-semibold">Direct Email</p>
                    <p className="text-[#09090b] font-semibold text-xs sm:text-[13px] tracking-tight group-hover:text-black transition-colors whitespace-nowrap">
                      support@motionlabswork.com
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[#71717a] group-hover:text-[#09090b] font-semibold transition-colors shrink-0 whitespace-nowrap">Email →</span>
              </a>
            </div>
          </div>

          {/* Right Column: World Map matching full height */}
          <WorldMap />
        </div>
      </div>
    </section>
  )
}
