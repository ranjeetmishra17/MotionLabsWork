const STEPS = [
  {
    n: '01',
    title: 'Discovery & Creative Scope',
    text: 'A swift alignment session to understand your audience, timeline, and exact deliverables. You get a transparent scope and fixed turnaround window.',
    metric: 'Day 1',
  },
  {
    n: '02',
    title: 'Shoot Direction or Footage Ingestion',
    text: 'We deploy on-location / studio 4K cinematography crews, or immediately ingest and catalog your raw footage and brand assets.',
    metric: 'Days 2–3',
  },
  {
    n: '03',
    title: 'Retention Edit & Audio Sculpting',
    text: 'Our specialized editors build the first cut with kinetic pacing, sound design, and custom grading, with two iterative review rounds included.',
    metric: 'Days 4–5',
  },
  {
    n: '04',
    title: 'Final Delivery & Platform Launch',
    text: 'Delivery of high-res master files across all aspect ratios (9:16, 16:9, 1:1), plus scheduled distribution for social management clients.',
    metric: 'Ready to Ship',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#fbfcf9] border-t border-black/8 relative">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/8 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#556b2f]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#151813]">
              Production Velocity
            </span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#151813] tracking-tight leading-[1.15] font-normal">
            <span className="italic">Four Steps from</span>{' '}
            <span className="font-semibold">Concept to Delivery.</span>
          </h2>
        </div>

        {/* 4-Step Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="liquid-card p-6 sm:p-8 bg-white flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300 border-black/8"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="display text-2xl font-bold text-[#556b2f] font-mono">
                    {s.n}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/5 text-[#151813] border border-black/8">
                    {s.metric}
                  </span>
                </div>
                <h3 className="font-playfair text-xl text-[#151813] font-bold mb-3">{s.title}</h3>
                <p className="text-[#565e53] text-sm leading-relaxed">{s.text}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-2 text-xs font-semibold text-[#556b2f]">
                <span>Phase {s.n} Guaranteed</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
