import React, { useEffect, useRef, useState } from 'react'

export const TheomediaSplash = () => {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const prefersReduced = useRef(false)

  useEffect(() => {
    prefersReduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced.current) {
      setVisible(false)
      return
    }

    const t1 = setTimeout(() => setOpen(true), 900)
    const t2 = setTimeout(() => setVisible(false), 2600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[1000] flex w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      {/* Left curtain */}
      <div
        className={[
          'absolute top-0 left-0 w-1/2 h-full bg-[#0E1A13]',
          'transition-transform duration-[1300ms]',
          open ? '-translate-x-full' : 'translate-x-0',
        ].join(' ')}
        style={{ transitionTimingFunction: 'cubic-bezier(0.77,0,0.175,1)' }}
      />
      {/* Right curtain */}
      <div
        className={[
          'absolute top-0 right-0 w-1/2 h-full bg-[#0E1A13]',
          'transition-transform duration-[1300ms]',
          open ? 'translate-x-full' : 'translate-x-0',
        ].join(' ')}
        style={{ transitionTimingFunction: 'cubic-bezier(0.77,0,0.175,1)' }}
      />

      {/* Studio signature — fades before curtains open */}
      <div
        className={[
          'absolute inset-0 flex flex-col items-center justify-center gap-3',
          'transition-opacity duration-200',
          open ? 'opacity-0' : 'opacity-100',
        ].join(' ')}
      >
        <p
          className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#C2A58D]/60"
          style={{ fontWeight: 400 }}
        >
          A digital experience by
        </p>
        <p
          className="font-serif text-[clamp(2rem,6vw,4.5rem)] text-[#F8F5F0] leading-none tracking-tight"
          style={{ fontWeight: 300 }}
        >
          TheoMedia
        </p>
      </div>
    </div>
  )
}
