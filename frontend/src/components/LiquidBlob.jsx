import { motion } from 'framer-motion'

export default function LiquidBlob({ className = '' }) {
  const blobs = [
    { cx: 240, cy: 220, r: 130, fill: 'url(#gradOrangePure)', delay: 0 },
    { cx: 330, cy: 170, r: 90, fill: '#556b2f', delay: 0.1 },
    { cx: 280, cy: 300, r: 85, fill: '#6e893e', delay: 0.18 },
    { cx: 160, cy: 310, r: 70, fill: '#3d4d22', delay: 0.25 },
    { cx: 180, cy: 170, r: 60, fill: '#50662a', delay: 0.3 },
  ]

  return (
    <div className={`relative pointer-events-none ${className}`}>
      <svg viewBox="0 0 500 500" width="100%" height="100%" className="overflow-visible">
        <g className="goo">
          {blobs.map((b, i) => (
            <motion.circle
              key={i}
              cx={b.cx}
              cy={b.cy}
              fill={b.fill}
              initial={{ r: 0, opacity: 0 }}
              animate={{
                r: [0, b.r * 1.12, b.r],
                opacity: 0.92,
              }}
              transition={{
                duration: 1.6,
                delay: b.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <animate
                attributeName="cy"
                values={`${b.cy};${b.cy - 20};${b.cy + 10};${b.cy}`}
                dur={`${8 + i * 1.5}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cx"
                values={`${b.cx};${b.cx + 18};${b.cx - 12};${b.cx}`}
                dur={`${10 + i * 1.8}s`}
                repeatCount="indefinite"
              />
            </motion.circle>
          ))}
        </g>
      </svg>
    </div>
  )
}
