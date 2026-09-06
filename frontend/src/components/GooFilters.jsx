// Shared SVG filter definitions that create the "liquid" gooey merge effect
// Strictly configured for Black and White Monochrome palette.
export default function GooFilters() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -9"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
        <linearGradient id="gradOrangePure" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#444444" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="gradOrangeBlack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2e2e2e" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <radialGradient id="gradOrangeCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#555555" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#333333" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#111111" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
