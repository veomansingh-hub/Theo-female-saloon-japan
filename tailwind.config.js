const screens = require('./tailwind.screens.config')

module.exports = {
  screens,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: ['outline-none'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1920px',
      },
      screens: {
        '3xl': '1600px',
        'not-tall': { raw: '(max-height: 850px)' },
        'high-dpi': { raw: '(min-resolution: 97dpi)' },
        'very-high-dpi': { raw: '(min-resolution: 130dpi)' },
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        quaternary: 'var(--quaternary)',
        quinary: 'var(--quinary)',
        cream: 'var(--cream)',
        'soft-beige': 'var(--soft-beige)',
        'rose-gold': 'var(--rose-gold)',
        'ivy-green': 'var(--ivy-green)',
        'midnight-ivy': 'var(--midnight-ivy)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
        quaternary: 'var(--text-quaternary)',
        quinary: 'var(--text-quinary)',
        special: 'var(--text-special)',
      },
      letterSpacing: {
        'widest-lux': '0.15em',
        'widest-ultra': '0.25em',
      },
      transitionTimingFunction: {
        'lux-ease': 'cubic-bezier(0.77, 0, 0.175, 1)',
      }
    },
  },
}
