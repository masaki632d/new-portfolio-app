import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#33E092',
        'secondary-color': '#0CCE6B',
        'tertiary-color': '#16a34a',
        'primary-bg': 'rgba(39, 39, 43, 0.4)',
        'secondary-bg': 'rgba(250, 250, 250, 0.4)',
      },
    },
  },
  plugins: [],
}
export default config
