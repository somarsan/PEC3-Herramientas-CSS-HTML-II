/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    colors: {
      black: '#000',
      white: '#fff',
      gray: '#262626',
      yellow: '#ffcd39',
    },
    extend: {
      fontFamily: {
        alte: ["Alte-Haas-Grotesk-Bold"],
      },
      gridTemplateColumns: {
        'customized': '1fr 2fr 2fr 1fr 5fr 1fr',
      },
    },
  },
  plugins: [],
}
