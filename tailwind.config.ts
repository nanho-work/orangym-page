import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orangym: {
          DEFAULT: '#ff6a00',
          dark: '#cc5600',
          light: '#ffb380',
        },
      },
    },
  },
  plugins: [],
}

export default config