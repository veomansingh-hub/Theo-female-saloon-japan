import React, { useEffect, useState } from 'react'
import { m } from 'framer-motion'

const STUDIO_URL = 'https://theomedia.co.uk'
const WHATSAPP_URL = 'https://wa.me/353852258004'

// Arrow icon — monochromatic, northeast direction
const ArrowNE = ({ className = '' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
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

// Dock link — refined hover with arrow movement
const DockLink = ({
  href,
  label,
  className = '',
}: {
  href: string
  label: React.ReactNode
  className?: string
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        'group inline-flex items-center gap-[6px]',
        'font-sans text-[11px] tracking-[0.12em] uppercase',
        'text-[#F8F5F0]/70 hover:text-[#F8F5F0]',
        'transition-colors duration-[220ms] ease-out',
        'focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A58D]/60 focus-visible:ring-offset-1 focus-visible:ring-offset-transparent rounded-sm',
        className,
      ].join(' ')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="relative">
        <span className="relative inline-block">
          {label}
          <span
            className={[
              'absolute bottom-0 left-0 h-px bg-[#F8F5F0]/40',
              'transition-all duration-[260ms] ease-out',
              hovered ? 'w-full' : 'w-0',
            ].join(' ')}
          />
        </span>
      </span>
      <span
        className="inline-block transition-transform duration-[220ms] ease-out"
        style={{
          transform: hovered ? 'translate(2px,-2px)' : 'translate(0,0)',
        }}
      >
        <ArrowNE />
      </span>
    </a>
  )
}

// The dock itself
export const TheomediaDock = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Slight delay so the dock enters after splash
    const t = setTimeout(() => setMounted(true), 2800)
    return () => clearTimeout(t)
  }, [])

  return (
    <m.div
      initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
      animate={mounted ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 10, filter: 'blur(4px)' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      // Respects prefers-reduced-motion via Framer Motion's global setting
      className={[
        // Fixed positioning — desktop bottom-left, mobile bottom safe-area
        'fixed z-[998]',
        'bottom-5 left-5 md:bottom-6 md:left-6',
        // Pill / dock shape
        'flex items-center',
        // Glass surface
        'bg-[#0E1A13]/80 backdrop-blur-[10px]',
        'border border-[#F8F5F0]/[0.08]',
        'rounded-full',
        // Padding — desktop vs mobile
        'px-5 py-3 md:px-6 md:py-[14px]',
        // Safe area for iPhone
        'pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] md:pb-[14px]',
        // Shadow
        'shadow-[0_2px_32px_rgba(14,26,19,0.55)]',
      ].join(' ')}
      role="complementary"
      aria-label="TheoMedia Studio"
    >
      {/* Desktop layout */}
      <div className="hidden md:flex items-center gap-5">
        {/* Studio name — wordmark */}
        <a
          href={STUDIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif text-sm text-[#F8F5F0]/90 hover:text-[#F8F5F0] tracking-wide leading-none transition-colors duration-[220ms] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A58D]/60 rounded-sm"
          aria-label="TheoMedia — visit studio website"
          style={{ fontWeight: 300 }}
        >
          TheoMedia
        </a>

        {/* Divider */}
        <span className="w-px h-3.5 bg-[#F8F5F0]/15 shrink-0" aria-hidden="true" />

        {/* CTAs */}
        <DockLink href={STUDIO_URL} label="Explore the Studio" />

        {/* Divider */}
        <span className="w-px h-3.5 bg-[#F8F5F0]/15 shrink-0" aria-hidden="true" />

        <DockLink href={WHATSAPP_URL} label="WhatsApp" />
      </div>

      {/* Mobile layout — stacked wordmark + two links */}
      <div className="flex md:hidden items-center gap-4">
        {/* Studio name */}
        <a
          href={STUDIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif text-sm text-[#F8F5F0]/90 tracking-wide leading-none"
          aria-label="TheoMedia"
          style={{ fontWeight: 300 }}
        >
          TheoMedia
        </a>

        {/* Divider */}
        <span className="w-px h-3.5 bg-[#F8F5F0]/15 shrink-0" aria-hidden="true" />

        <DockLink href={STUDIO_URL} label="Explore Studio" />

        {/* Divider */}
        <span className="w-px h-3.5 bg-[#F8F5F0]/15 shrink-0" aria-hidden="true" />

        <DockLink href={WHATSAPP_URL} label="WhatsApp" />
      </div>
    </m.div>
  )
}
