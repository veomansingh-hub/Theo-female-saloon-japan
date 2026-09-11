import React, { useEffect, useState } from 'react'

export const TheomediaSplash = () => {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // 1 second delay before opening curtains
    const timer1 = setTimeout(() => {
      setOpen(true)
    }, 1000)
    
    // Completely remove from DOM after animation completes (1s wait + 1s animation + 0.5s buffer)
    const timer2 = setTimeout(() => {
      setVisible(false)
    }, 2500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[1000] flex w-full h-full pointer-events-none">
      {/* Left Curtain */}
      <div 
        className={`absolute top-0 left-0 w-1/2 h-full bg-black transition-transform duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${open ? '-translate-x-full' : 'translate-x-0'}`}
      />
      {/* Right Curtain */}
      <div 
        className={`absolute top-0 right-0 w-1/2 h-full bg-black transition-transform duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${open ? 'translate-x-full' : 'translate-x-0'}`}
      />
      
      {/* Text Container (centered) */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black text-white tracking-widest uppercase text-center px-4">
          BUILD BY THEMEDIA.CO.UK
        </h1>
      </div>
    </div>
  )
}
