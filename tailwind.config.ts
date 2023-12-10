import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {},
  plugins: [],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ]
}

export default config