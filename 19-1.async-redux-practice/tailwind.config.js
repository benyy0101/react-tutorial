/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        reduxBlack:'#252424',
        purpleHaze:'#2F2440'
      }
    },
    fontFamily:{
      sans:['Chivo', 'sans-serif']
    }
  },
  plugins: [

  ],
}