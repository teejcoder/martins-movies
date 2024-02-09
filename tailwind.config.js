/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#EDF5F7',
        paragraph: '#948A99',
        title: '#3E4555',
        footer: '#343A40',
        footerText: '#A7A1AB',
        white: '#FFFFFF',
        purple: '#9352B3',
        palePurple: '#EDDFF5',
        green: '#8AC926',
      },
      fontSize: {
        title: '16px'
      }
    },
  },
  plugins: [],
}