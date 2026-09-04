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
          ? 'bg-[#08090b]/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-2.5 group focus-ring">
          <div className="w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center font-bold text-sm shadow-md group-hover:bg-[#ff5500] group-hover:text-white transition-colors">
            M
          </div>
          <div className="flex flex-col">
            <span className="display text-lg font-bold tracking-tight text-white leading-none">
              Motion Labs
            </span>
            <span className="text-[10px] uppercase font-semibold text-[#9496a1] tracking-widest mt-0.5">
              Production Studio
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-[#9496a1]">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-white transition-colors focus-ring py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ff5500] hover:after:w-full after:transition-all after:duration-300"
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
              className="text-xs font-semibold px-4 py-2 rounded-full border border-white/15 hover:border-white text-white bg-white/5 transition-all focus-ring cursor-pointer"
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-xs font-semibold border border-white/20 bg-[#14161b] rounded-full px-4 py-2 text-white focus-ring"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu ☰'}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="md:hidden bg-[#0c0d10]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
          <ul className="container py-6 flex flex-col gap-4 text-base font-medium text-white">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 hover:text-[#ff5500] focus-ring"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2 flex flex-col gap-3">
              {onOpenShowreel && (
                <button
                  onClick={() => {
                    setOpen(false)
                    onOpenShowreel()
                  }}
                  className="w-full text-center py-3 text-sm font-semibold rounded-full border border-white/20 text-white bg-white/5"
                >
                  ▶ Watch 2026 Showreel
                </button>
              )}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="liquid-btn-primary text-center text-sm py-3"
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
