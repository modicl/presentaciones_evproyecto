/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'duoc-blue':   '#307FE2',
        'duoc-yellow': '#FFB800',
        'duoc-dark':   '#1A1A1A',
        'duoc-green':  '#43B02A',
        'duoc-gray':   '#666666',
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body:    ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
