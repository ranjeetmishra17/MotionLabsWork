import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Reels', href: '#videos' },
  { label: 'Services', href: '#services' },
  { label: 'Top Brands', href: '#brands-orbit' },
  { label: 'Top Creators', href: '#creators-orbit' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Navbar({ onOpenShowreel }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fbfcf9]/90 backdrop-blur-xl border-b border-black/8 py-3.5 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-2.5 group focus-ring">
          <div className="w-8 h-8 rounded-xl bg-[#556b2f] text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:bg-[#435523] transition-colors">
            M
          </div>
          <div className="flex flex-col">
            <span className="display text-lg font-bold tracking-tight text-[#151813] leading-none">
              Motion Labs
            </span>
            <span className="text-[10px] uppercase font-semibold text-[#565e53] tracking-widest mt-0.5">
              Production Studio
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-[#565e53]">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-[#151813] transition-colors focus-ring py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#556b2f] hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenShowreel && (
            <button
              onClick={onOpenShowreel}
              className="text-xs font-semibold px-4 py-2 rounded-full border border-black/10 hover:border-[#556b2f] text-[#151813] bg-black/4 transition-all focus-ring cursor-pointer"
            >
              ▶ 2026 Reel
            </button>
          )}
          <a
            href="#contact"
            className="liquid-btn-primary text-xs font-semibold px-5 py-2.5 focus-ring"
          >
            Start a Project →
          </a>
        </div>

        {/* Mobile Hamburger / Toggle */}
        <button
          className="md:hidden flex items-center gap-2 text-xs font-semibold border border-black/10 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-1.5 text-[#151813] shadow-sm active:scale-95 transition-transform focus-ring"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <span className="w-2 h-2 rounded-full bg-[#556b2f]" />
          <span>{open ? '✕ Close' : 'Menu ☰'}</span>
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="md:hidden bg-white/98 backdrop-blur-2xl border-b border-black/10 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="container py-6 flex flex-col gap-3 text-base font-medium text-[#151813]">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-black/5 hover:text-[#556b2f] transition-colors focus-ring"
                >
                  <span>{l.label}</span>
                  <span className="text-xs text-[#7d8778]">→</span>
                </a>
              </li>
            ))}
            <li className="pt-3 border-t border-black/10 flex flex-col gap-2.5">
              {onOpenShowreel && (
                <button
                  onClick={() => {
                    setOpen(false)
                    onOpenShowreel()
                  }}
                  className="w-full text-center py-3 text-sm font-semibold rounded-full border border-black/15 text-[#151813] bg-black/4 hover:bg-black/8 transition-colors"
                >
                  ▶ Watch 2026 Showreel
                </button>
              )}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="liquid-btn-primary text-center text-sm py-3.5"
              >
                Start a Project →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
