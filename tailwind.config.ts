import type { Config } from 'tailwindcss'

const PRIMARY_COLOR = '#162694'
const SECONDARY_COLOR = '#FFF9EF'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: PRIMARY_COLOR,
        secondary: SECONDARY_COLOR
      },
      textColor: {
        primary: 'colors.primary'
      },
      dropShadow: {
        DEFAULT: `0.6rem 0.6rem 0 ${PRIMARY_COLOR}`,
        inverse: `0 0 0 ${PRIMARY_COLOR}`
      },
      boxShadow: {
        inner: `inset 0 0 6px 4px rgba(22, 38, 148, 0.2)`
      }
    }
  },
  plugins: []
}
export default config
