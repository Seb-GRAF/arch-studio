/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['League Spartan'],
      },
      colors: {
        lightBlue: '#EEEFF4',
        gray: {
          100: '#7D828F',
          500: '#C8CCD8',
          800: '#60636D',
          900: '#1B1D23',
        },
        divider: '#C8CCD8',
      },
    },
    screens: {
      tablet: '768px',
      desktop: '1440px',
    },
  },
  plugins: [],
}
