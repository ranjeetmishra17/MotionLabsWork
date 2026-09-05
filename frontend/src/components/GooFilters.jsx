// Shared SVG filter definitions that create the "liquid" gooey merge effect
// Strictly configured for Light luxury and Olive Green palette.
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
          <stop offset="0%" stopColor="#69833c" />
          <stop offset="100%" stopColor="#4c6229" />
        </linearGradient>
        <linearGradient id="gradOrangeBlack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#556b2f" />
          <stop offset="100%" stopColor="#253114" />
        </linearGradient>
        <radialGradient id="gradOrangeCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#637c38" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#4f652b" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#556b2f" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
