import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'pulse-donut': {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.12' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.12)', opacity: '0.22' },
        },
      },
      animation: {
        'pulse-donut': 'pulse-donut 14s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config
