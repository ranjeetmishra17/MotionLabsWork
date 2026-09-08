import { useState } from 'react'
import {
  WORLD_BACKGROUND_PATH,
  COUNTRY_PATHS,
  COUNTRIES,
} from './worldMapData'

export default function WorldMap({ className = '' }) {
  const [hoveredCountry, setHoveredCountry] = useState(null)

  const activeCountry = hoveredCountry || COUNTRIES[0]

  return (
    <div className={`w-full h-full liquid-card p-6 sm:p-8 bg-white/95 border-black/8 shadow-2xl relative overflow-hidden flex flex-col justify-between ${className}`}>
      {/* Ambient background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-black/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Card Header with Live Status & Active Country Info */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-black/8 relative z-10 shrink-0">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
            </span>
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#09090b]">
              Global Client Footprint
            </span>
          </div>
          <p className="text-xs text-[#52525b] mt-0.5">
            Intercontinental flight arcs & active production hubs across 8+ countries
          </p>
        </div>

        <div className="flex items-center gap-2">
          {hoveredCountry ? (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#09090b] text-white text-xs font-semibold shadow-md animate-in fade-in zoom-in-95 duration-200">
              <span className="text-sm">{hoveredCountry.flag}</span>
              <span className="font-bold">{hoveredCountry.name}</span>
              <span className="text-white/40">·</span>
              <span className="text-emerald-400 font-bold">{hoveredCountry.projectsDelivered} Films</span>
            </div>
          ) : (
            <>
              <span className="text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-full bg-black/5 text-[#09090b] border border-black/10">
                8 Countries Active
              </span>
              <span className="text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-full bg-[#09090b] text-white shadow-xs">
                150+ Global Deliverables
              </span>
            </>
          )}
        </div>
      </div>

      {/* SVG Interactive World Map Canvas with Clean Natural Sizing */}
      <div className="relative w-full flex-1 min-h-[340px] select-none rounded-xl overflow-hidden bg-gradient-to-b from-[#fafafb] to-[#f4f4f6] border border-black/5 shadow-inner flex items-center justify-center">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full object-contain"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Tactical Grid Pattern */}
            <pattern id="worldMapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(0, 0, 0, 0.035)"
                strokeWidth="0.8"
              />
            </pattern>

            {/* Radiant Flow Gradients for Arcs */}
            <linearGradient id="arcGlowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#09090b" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#25D366" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#09090b" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="arcActiveGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#09090b" />
              <stop offset="50%" stopColor="#000000" />
              <stop offset="100%" stopColor="#09090b" />
            </linearGradient>

            {/* Country Gradient Shading */}
            <linearGradient id="countryFillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#27272a" />
              <stop offset="60%" stopColor="#18181b" />
              <stop offset="100%" stopColor="#09090b" />
            </linearGradient>

            <linearGradient id="countryHoverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3f3f46" />
              <stop offset="50%" stopColor="#18181b" />
              <stop offset="100%" stopColor="#050507" />
            </linearGradient>

            {/* Drop Shadow Filter for Beacons & Countries */}
            <filter id="hubGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
            <filter id="cometGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
          </defs>

          {/* Blueprint Grid Layer */}
          <rect width="1000" height="500" fill="url(#worldMapGrid)" />

          {/* Latitude & Longitude Reference Lines */}
          <line
            x1="0"
            y1="250"
            x2="1000"
            y2="250"
            stroke="rgba(0,0,0,0.04)"
            strokeDasharray="4 6"
          />
          <line
            x1="0"
            y1="185"
            x2="1000"
            y2="185"
            stroke="rgba(0,0,0,0.025)"
            strokeDasharray="2 4"
          />

          {/* Background World Landmasses */}
          <path
            d={WORLD_BACKGROUND_PATH}
            fill="rgba(0, 0, 0, 0.05)"
            stroke="rgba(0, 0, 0, 0.08)"
            strokeWidth="0.6"
          />

          {/* Highlighted Worked-With Countries with Gradient Depth */}
          {COUNTRIES.map((country) => {
            const pathData = COUNTRY_PATHS[country.id]
            if (!pathData) return null

            const isHovered = activeCountry.id === country.id

            return (
              <g
                key={country.id}
                className="cursor-pointer transition-all duration-300 country-glow-pulse"
                onMouseEnter={() => setHoveredCountry(country)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                {/* Active Country Outer Halo Glow */}
                {isHovered && (
                  <path
                    d={pathData}
                    fill="none"
                    stroke="#09090b"
                    strokeWidth="3"
                    opacity="0.35"
                    filter="url(#hubGlow)"
                  />
                )}

                {/* Shaded Country Landmass Fill */}
                <path
                  d={pathData}
                  fill={isHovered ? 'url(#countryHoverGradient)' : 'url(#countryFillGradient)'}
                  stroke={isHovered ? '#09090b' : '#3f3f46'}
                  strokeWidth={isHovered ? '1.4' : '0.8'}
                  className="transition-all duration-200"
                >
                  <title>{`${country.name} · ${country.projectsDelivered} deliverables`}</title>
                </path>
              </g>
            )
          })}

          {/* Dynamic Animated Connection Arcs with Multi-Stage Comets */}
          {COUNTRIES.filter((c) => !c.isHq && c.arc).map((country, idx) => {
            const isHovered = activeCountry.id === country.id
            const duration = 2.4 + (idx % 3) * 0.6

            return (
              <g key={`arc-group-${country.id}`}>
                {/* Background Trace Arc */}
                <path
                  d={country.arc}
                  fill="none"
                  stroke={isHovered ? '#09090b' : 'rgba(0, 0, 0, 0.12)'}
                  strokeWidth={isHovered ? '1.8' : '1'}
                  strokeDasharray="3 4"
                  className="transition-all duration-300"
                />

                {/* Secondary Arc for US West Coast if present */}
                {country.secondaryArc && (
                  <>
                    <path
                      d={country.secondaryArc}
                      fill="none"
                      stroke={isHovered ? '#09090b' : 'rgba(0, 0, 0, 0.12)'}
                      strokeWidth={isHovered ? '1.8' : '1'}
                      strokeDasharray="3 4"
                    />
                    <path
                      d={country.secondaryArc}
                      fill="none"
                      stroke="url(#arcGlowGradient)"
                      strokeWidth={isHovered ? '2.5' : '1.6'}
                      strokeDasharray="40 160"
                      className="arc-pulse-flow"
                      style={{ animationDuration: `${duration + 0.4}s` }}
                    />
                  </>
                )}

                {/* High-Velocity Streaming Particle Beam */}
                <path
                  d={country.arc}
                  fill="none"
                  stroke={isHovered ? 'url(#arcActiveGlow)' : 'url(#arcGlowGradient)'}
                  strokeWidth={isHovered ? '2.8' : '1.8'}
                  strokeDasharray="50 180"
                  className="arc-pulse-flow"
                  style={{
                    animationDuration: `${duration}s`,
                    opacity: isHovered ? 1 : 0.85,
                  }}
                />

                {/* Glowing Primary Light Photon / Comet Head */}
                <circle r={isHovered ? '3.8' : '2.8'} fill="#09090b" filter="url(#cometGlow)">
                  <animateMotion
                    dur={`${duration}s`}
                    repeatCount="indefinite"
                    path={country.arc}
                  />
                </circle>

                {/* Trailing Core Spark */}
                <circle r="1.6" fill="#ffffff">
                  <animateMotion
                    dur={`${duration}s`}
                    repeatCount="indefinite"
                    path={country.arc}
                  />
                </circle>
              </g>
            )
          })}

          {/* Sub-hubs markers */}
          {COUNTRIES.flatMap((c) =>
            (c.subHubs || []).map((sh) => (
              <g key={`subhub-${sh.name}`} transform={`translate(${sh.coords.x}, ${sh.coords.y})`}>
                <circle r="2" fill="#52525b" opacity="0.7" />
              </g>
            ))
          )}

          {/* Triple Sonar Ripple Radar on New Delhi HQ */}
          <g transform={`translate(${COUNTRIES[0].coords.x}, ${COUNTRIES[0].coords.y})`}>
            <circle
              className="sonar-wave-1 pointer-events-none"
              fill="none"
              stroke="#09090b"
            />
            <circle
              className="sonar-wave-2 pointer-events-none"
              fill="none"
              stroke="#25D366"
            />
            <circle
              className="sonar-wave-3 pointer-events-none"
              fill="none"
              stroke="#09090b"
            />
          </g>

          {/* Primary Hub Beacons / Radars */}
          {COUNTRIES.map((country) => {
            const isHovered = activeCountry.id === country.id

            return (
              <g
                key={`hub-${country.id}`}
                transform={`translate(${country.coords.x}, ${country.coords.y})`}
                className="cursor-pointer group"
                onMouseEnter={() => setHoveredCountry(country)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                {/* Outer Ping Ring */}
                <circle
                  r={country.isHq ? '14' : '10'}
                  fill="none"
                  stroke="#09090b"
                  strokeWidth="1.2"
                  className="animate-ping"
                  opacity={isHovered ? 0.75 : 0.3}
                  style={{ transformOrigin: 'center' }}
                />

                {/* Halo Disc */}
                <circle
                  r={country.isHq ? '8' : '6'}
                  fill="#09090b"
                  opacity={isHovered ? 0.3 : 0.12}
                />

                {/* Core Luminous Dot */}
                <circle
                  r={country.isHq ? '4.5' : '3.5'}
                  fill={country.isHq ? '#09090b' : isHovered ? '#09090b' : '#27272a'}
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  className="transition-transform group-hover:scale-125"
                />

                {/* HQ Crown / Badge for New Delhi */}
                {country.isHq && (
                  <g transform="translate(0, -9)">
                    <rect
                      x="-14"
                      y="-12"
                      width="28"
                      height="12"
                      rx="3"
                      fill="#09090b"
                      stroke="#ffffff"
                      strokeWidth="0.8"
                    />
                    <text
                      x="0"
                      y="-4"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="7"
                      fontWeight="bold"
                      fontFamily="system-ui, sans-serif"
                    >
                      HQ
                    </text>
                  </g>
                )}

                {/* Hub City Name Tag on hover */}
                {isHovered && !country.isHq && (
                  <g transform="translate(0, -9)">
                    <rect
                      x="-28"
                      y="-12"
                      width="56"
                      height="12"
                      rx="3"
                      fill="#09090b"
                      stroke="#ffffff"
                      strokeWidth="0.8"
                    />
                    <text
                      x="0"
                      y="-4"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="6.5"
                      fontWeight="600"
                      fontFamily="system-ui, sans-serif"
                    >
                      {country.name}
                    </text>
                  </g>
                )}
              </g>
            )
          })}
        </svg>

        {/* Floating Quick Hint */}
        <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-white/85 backdrop-blur-md border border-black/8 text-[10px] text-[#71717a] font-medium pointer-events-none hidden sm:block">
          Hover pins to explore deliverables
        </div>
      </div>
    </div>
  )
}
