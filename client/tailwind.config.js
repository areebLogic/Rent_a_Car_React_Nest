/** @type {import('tailwindcss').Config} */
/*eslint-disable*/
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#2196F3',
        secondary: '#2d2d2d'
      },
      fontFamily:{
        sans:['Roboto','sans-serif'],
        heading:['Montserrat','sans-serif'],
        central: ['Pacifico', 'sans-serif']
      }
    },
  },
  plugins: [],
}
