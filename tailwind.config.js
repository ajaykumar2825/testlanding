/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
        fustat: ['var(--font-fustat)', 'sans-serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0084FF',
          hover: '#0074E0',
          active: '#0066CC',
        },
        neutral: {
          500: '#6B7280',
          900: '#171717',
        },
      },
      borderRadius: {
        '16': '16px',
        '20': '20px',
        '24': '24px',
      },
      boxShadow: {
        'liquid-glass': 'inset 0 2.5px 4px rgba(255,255,255,0.8)',
        'cta-primary': 'inset 0px 4px 4px 0px rgba(255,255,255,0.35), 0 10px 25px -5px rgba(0, 132, 255, 0.25)',
        'badge-blue': '0 12px 32px -4px rgba(0,132,255,0.12)',
        'badge-green': '0 12px 32px -4px rgba(16,185,129,0.12)',
        'badge-purple': '0 12px 32px -4px rgba(147,51,234,0.12)',
        'icon-blue': '0 4px 12px rgba(0,132,255,0.3)',
        'icon-green': '0 4px 12px rgba(16,185,129,0.3)',
        'icon-purple': '0 4px 12px rgba(147,51,234,0.3)',
      },
      backdropBlur: {
        '20': '20px',
        '40': '40px',
        '50': '50px',
        '100': '100px',
        '110': '110px',
        '120': '120px',
      },
      animation: {
        'pulse-slow': 'pulse 7s ease-in-out infinite',
        'float-1': 'float-1 5s ease-in-out infinite',
        'float-2': 'float-2 5.5s ease-in-out infinite',
        'float-3': 'float-3 4.8s ease-in-out infinite',
      },
      keyframes: {
        'float-1': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(2px, -8px)' },
        },
        'float-2': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-2px, 8px)' },
        },
        'float-3': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-1px, -10px)' },
        },
      },
    },
  },
  plugins: [],
};