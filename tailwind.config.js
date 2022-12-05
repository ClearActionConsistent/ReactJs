const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ct4-orange-start': '#f26922',
        'ct4-orange': '#e67e22',
        'ct4-facebook': '#4267b2',
        'ct4-green': '#39ac31'
      },
      fontFamily: {
        'tnr': '"Times New Roman"',
      },
      height: {
        '60px': '60px',
        100: '100px',
        400: '400px'
      },
      margin: {
        0.35: '35%',
        30: '120px',
        '50px': '50px'
      },
      maxWidth: {
        500: '500px',
        600: '600px',
        700: '700px',
        800: '800px',
        1400: '1400px',
      },
      minWidth: {
        280: '280px'
      }
      ,
      minHeight: {
        200: '200px'
      },
      padding: {
        30: '120px',
        240: '240px'
      },
      width: {
        0.3: '30%',
        100: '100px',
        250: '250px',
        420: '420px'
      },
    },
  },
  plugins: [],
}