/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-IBM-Plex)', 'var(--font-IBM-Plex)', ...fontFamily.sans],
        display: [ 'var(--font-Audiowidex)', ...fontFamily.sans]

      }
    },
  },
  plugins: [],
}
