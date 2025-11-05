import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          light: 'rgba(190, 140, 193, 1)',
          DEFAULT: 'rgba(190, 140, 193, 1)',
        },
      },
      fontFamily: {
        'eb-garamond': ['EB Garamond', 'serif'],
        'bella-queta': ['Bella Queta', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config

