import React, { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'

export const TheomediaWidget = () => {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Email Us', href: 'mailto:hello@theomedia.co.uk' },
    { label: 'Instagram', href: 'https://theomedia.co.uk' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61594428231748' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } },
    exit: { opacity: 0, y: 10, scale: 0.9, transition: { duration: 0.2 } }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <m.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex flex-col space-y-3 mb-4 origin-bottom-right"
          >
            {links.map((link) => (
              <m.a
                key={link.label}
                variants={itemVariants}
                href={link.href}
                target={link.label !== 'Email Us' ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="bg-white/80 backdrop-blur-md border border-white/20 text-quaternary px-6 py-3 rounded-full shadow-2xl font-sans text-sm tracking-wide font-medium hover:bg-white transition-colors flex items-center justify-center min-w-[140px]"
                aria-label={link.label}
              >
                {link.label}
              </m.a>
            ))}
          </m.div>
        )}
      </AnimatePresence>
      
      <button 
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle contact menu"
        className="bg-quaternary text-white px-7 py-4 rounded-full shadow-2xl font-sans text-sm tracking-wide font-medium hover:bg-quinary transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-quaternary"
      >
        <div className="relative w-32 h-5 overflow-hidden">
          <m.span 
            className="absolute inset-0 flex items-center justify-center"
            initial={false}
            animate={{ y: open ? -30 : 0, opacity: open ? 0 : 1 }}
            transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
          >
            Connect with us
          </m.span>
          <m.span 
            className="absolute inset-0 flex items-center justify-center"
            initial={false}
            animate={{ y: open ? 0 : 30, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
          >
            Close
          </m.span>
        </div>
      </button>
    </div>
  )
}
