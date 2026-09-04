import { useEffect, useState, useRef } from 'react'

function RunningCounter({ target, decimals = 0, prefix = '', suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = performance.now()

          const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out expo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            const currentVal = easeProgress * target
            setCount(currentVal)

            if (progress < 1) {
              requestAnimationFrame(updateCount)
            } else {
              setCount(target)
            }
          }

          requestAnimationFrame(updateCount)
        }
      },
      { threshold: 0.2 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={elementRef} className="font-sans font-bold">
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  )
}

export default function StatsCounter() {
  return (
    <section className="py-12 md:py-16 bg-[#08090b] relative z-10">
      <div className="container">
        <div className="w-full max-w-4xl mx-auto liquid-card p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center bg-[#111317]/90 shadow-2xl border-white/10">
          <div className="pt-3 md:pt-0">
            <p className="text-3xl sm:text-4xl text-white tracking-tight">
              <RunningCounter target={50} suffix="M+" />
            </p>
            <p className="text-xs font-semibold text-[#9496a1] uppercase tracking-wider mt-2 font-sans">
              Organic Views
            </p>
          </div>

          <div className="pt-3 md:pt-0">
            <p className="text-3xl sm:text-4xl text-[#ff5500] tracking-tight">
              <RunningCounter target={150} suffix="+" />
            </p>
            <p className="text-xs font-semibold text-[#9496a1] uppercase tracking-wider mt-2 font-sans">
              Edits Delivered
            </p>
          </div>

          <div className="pt-3 md:pt-0">
            <p className="text-3xl sm:text-4xl text-white tracking-tight">
              <RunningCounter target={48} suffix="h" />
            </p>
            <p className="text-xs font-semibold text-[#9496a1] uppercase tracking-wider mt-2 font-sans">
              Avg Turnaround
            </p>
          </div>

          <div className="pt-3 md:pt-0">
            <p className="text-3xl sm:text-4xl text-[#ff5500] tracking-tight">
              <RunningCounter target={4.9} decimals={1} suffix="★" />
            </p>
            <p className="text-xs font-semibold text-[#9496a1] uppercase tracking-wider mt-2 font-sans">
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
