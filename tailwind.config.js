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
        400: '400px'
      },
      margin: {
        0.35: '35%',
        30: '120px',
        '50px': '50px'
      },
      maxWidth: {
        1400: '1400px',
      },
      padding: {
        30: '120px'
      },
      width: {
        0.3: '30%',
        250: '250px'
      },
    },
  },
  plugins: [],
}