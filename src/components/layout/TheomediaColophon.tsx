import React, { useState } from 'react'

const STUDIO_URL = 'https://theomedia.co.uk'
const WHATSAPP_URL = 'https://wa.me/353852258004'

const ArrowNE = ({ className = '' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 10 10"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ColophonLink = ({
  href,
  children,
  size = 'sm',
}: {
  href: string
  children: React.ReactNode
  size?: 'sm' | 'lg'
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        'group inline-flex items-center gap-[6px]',
        'font-sans uppercase tracking-[0.15em]',
        size === 'lg' ? 'text-[11px]' : 'text-[10px]',
        'text-[#F8F5F0]/50 hover:text-[#F8F5F0]/90',
        'transition-colors duration-[240ms] ease-out',
        'focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A58D]/50 rounded-sm',
      ].join(' ')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="relative">
        {children}
        <span
          className="absolute bottom-0 left-0 h-px bg-[#F8F5F0]/30 transition-all duration-[260ms] ease-out"
          style={{ width: hovered ? '100%' : '0%' }}
        />
      </span>
      <span
        className="inline-block transition-transform duration-[220ms] ease-out"
        style={{ transform: hovered ? 'translate(2px,-2px)' : 'translate(0,0)' }}
      >
        <ArrowNE />
      </span>
    </a>
  )
}

export const TheomediaColophon = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="w-full bg-[#0E1A13] border-t border-[#F8F5F0]/[0.06]"
      role="contentinfo"
      aria-label="TheoMedia Studio Colophon"
    >
      {/* Top rule */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 xl:px-16 py-14 md:py-16 xl:py-20">

        {/* Label line */}
        <p className="font-sans text-[9px] tracking-[0.45em] uppercase text-[#F8F5F0]/30 mb-6 md:mb-8">
          Digital Experience by
        </p>

        {/* Wordmark — large, editorial */}
        <div className="mb-8 md:mb-10">
          <a
            href={STUDIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TheoMedia — explore the studio"
            className="inline-block focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A58D]/50 rounded-sm"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <h2
              className="font-serif leading-none text-[#F8F5F0]"
              style={{
                fontSize: 'clamp(3.5rem, 9vw, 9rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                opacity: hovered ? 1 : 0.88,
                transition: 'opacity 260ms ease',
              }}
            >
              TheoMedia
            </h2>
          </a>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">
          {/* Metadata */}
          <p
            className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#F8F5F0]/30 leading-relaxed"
          >
            Independent digital studio&nbsp;&mdash;&nbsp;UK · Ireland · Europe
          </p>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <ColophonLink href={STUDIO_URL}>Explore the Studio</ColophonLink>
            <span className="w-px h-3 bg-[#F8F5F0]/15" aria-hidden="true" />
            <ColophonLink href={WHATSAPP_URL}>WhatsApp</ColophonLink>
          </div>
        </div>
      </div>
    </div>
  )
}
