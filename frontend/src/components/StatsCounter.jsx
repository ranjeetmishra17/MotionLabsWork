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
    <section className="py-8 sm:py-12 md:py-16 bg-[#fbfcf9] relative z-10">
      <div className="container">
        <div className="w-full max-w-4xl mx-auto liquid-card p-4 sm:p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 text-center">
          <div className="p-3 sm:p-4 rounded-2xl bg-black/[0.03] border border-black/8 flex flex-col justify-center">
            <p className="text-2xl sm:text-3xl md:text-4xl text-[#11140e] tracking-tight font-bold">
              <RunningCounter target={50} suffix="M+" />
            </p>
            <p className="text-[10px] sm:text-xs font-semibold text-[#4a5246] uppercase tracking-normal sm:tracking-wider mt-1 sm:mt-1.5 font-sans">
              Organic Views
            </p>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-black/[0.03] border border-black/8 flex flex-col justify-center">
            <p className="text-2xl sm:text-3xl md:text-4xl text-[#11140e] tracking-tight font-bold">
              <RunningCounter target={150} suffix="+" />
            </p>
            <p className="text-[10px] sm:text-xs font-semibold text-[#4a5246] uppercase tracking-normal sm:tracking-wider mt-1 sm:mt-1.5 font-sans">
              Edits Delivered
            </p>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-black/[0.03] border border-black/8 flex flex-col justify-center">
            <p className="text-2xl sm:text-3xl md:text-4xl text-[#11140e] tracking-tight font-bold">
              <RunningCounter target={48} suffix="h" />
            </p>
            <p className="text-[10px] sm:text-xs font-semibold text-[#4a5246] uppercase tracking-normal sm:tracking-wider mt-1 sm:mt-1.5 font-sans">
              Avg Turnaround
            </p>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-black/[0.03] border border-black/8 flex flex-col justify-center">
            <p className="text-2xl sm:text-3xl md:text-4xl text-[#11140e] tracking-tight font-bold">
              <RunningCounter target={4.9} decimals={1} suffix="★" />
            </p>
            <p className="text-[10px] sm:text-xs font-semibold text-[#4a5246] uppercase tracking-normal sm:tracking-wider mt-1 sm:mt-1.5 font-sans">
              Client Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
