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
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#2563EB',
        accent: '#60A5FA',
        surface: '#F8FAFC',
        ink: '#111827',
      },
      borderRadius: {
        16: '16px',
        20: '20px',
        24: '24px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16, 24, 40, 0.04), 0 8px 24px -8px rgba(16, 24, 40, 0.08)',
        card: '0 1px 2px rgba(16, 24, 40, 0.04), 0 20px 48px -24px rgba(37, 99, 235, 0.16)',
        cta: '0 1px 2px rgba(16, 24, 40, 0.08), 0 16px 32px -12px rgba(37, 99, 235, 0.4)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
