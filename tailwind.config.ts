import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'selector',
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        signature: ['agustina', 'sans-serif'],
        incognito: ['var(--incognito)'],
        inter: ['var(--inter)'],
      },
      colors: {
        'primary-color': '#33E092',
        'secondary-color': '#0CCE6B',
        'tertiary-color': '#16a34a',
        'primary-bg': 'rgba(39, 39, 43, 0.4)',
        'secondary-bg': 'rgba(250, 250, 250, 0.4)',
      },
      boxShadow: {
        'line-light': 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
        'line-dark': 'rgb(29, 29, 32) 0px 1px 0px',
      },
      gridTemplateColumns: {
        custom: '1.2fr 1fr',
      },
    },
  },
  plugins: [],
}
export default config
