import React, { useState } from 'react'

export const TheomediaWidget = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
      <div 
        className={`flex flex-col space-y-3 mb-4 transition-all duration-300 origin-bottom-right ${open ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        <a 
          href="mailto:hello@theomedia.co.uk" 
          className="bg-white text-gray-900 px-5 py-3 rounded-full shadow-lg font-sans font-medium hover:bg-gray-100 transition-colors"
        >
          Email Us
        </a>
        <a 
          href="https://theomedia.co.uk" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-gray-900 px-5 py-3 rounded-full shadow-lg font-sans font-medium hover:bg-gray-100 transition-colors"
        >
          Instagram
        </a>
        <a 
          href="https://www.facebook.com/profile.php?id=61594428231748" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-gray-900 px-5 py-3 rounded-full shadow-lg font-sans font-medium hover:bg-gray-100 transition-colors"
        >
          Facebook
        </a>
      </div>
      
      <button 
        onClick={() => setOpen(!open)}
        className="bg-gray-900 text-white px-6 py-3 rounded-full shadow-xl font-sans font-medium hover:scale-105 transition-transform"
      >
        {open ? 'Close' : 'Connect with us'}
      </button>
    </div>
  )
}
