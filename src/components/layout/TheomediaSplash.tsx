import React, { useEffect, useState } from 'react'

export const TheomediaSplash = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[1000] flex flex-col items-center justify-center w-full h-full bg-white transition-opacity duration-1000" style={{ animation: 'fadeOut 1s 1.5s forwards' }}>
      <h1 className="text-2xl font-sans font-bold text-gray-900 tracking-widest uppercase">
        Build By Theomedia co uk
      </h1>
      <style>{`
        @keyframes fadeOut {
          to {
            opacity: 0;
            pointer-events: none;
            visibility: hidden;
          }
        }
      `}</style>
    </div>
  )
}
