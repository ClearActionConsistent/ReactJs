const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'otf-orange-start': '#F26922',
      },
      maxWidth: {
        1400: '1400px',
      },
      fontFamily: {
        'tnr': '"Times New Roman"',
      },
    },
  },
  plugins: [],
}