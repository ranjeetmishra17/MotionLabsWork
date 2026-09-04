// Shared SVG filter definitions that create the "liquid" gooey merge effect
// Strictly configured for White, Black, and vibrant Orange palette.
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
          <stop offset="0%" stopColor="#ff7700" />
          <stop offset="100%" stopColor="#ff4400" />
        </linearGradient>
        <linearGradient id="gradOrangeBlack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff5500" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>
        <radialGradient id="gradOrangeCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff6600" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#ff4400" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ff5500" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
