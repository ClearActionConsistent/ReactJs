const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ct4-subscribe': "url('https://evogym.vn/wp-content/uploads/2021/08/youngfitnesscenter-evogym-setup-phong-gym-banner-aspect-ratio-1300-500.jpg')",
      },
      colors: {
        'ct4-orange-start': '#f26922',
        'ct4-orange': '#e67e22',
        'ct4-facebook': '#4267b2',
        'ct4-green': '#39ac31',
        'ct4-red': '#c20000',
        'ct4-red-1': '#ff0000',
        'ct4-gray': '#d9d9d9'
      },
      fontFamily: {
        'tnr': '"Times New Roman"',
      },
      height: {
        '60px': '60px',
        100: '100px',
        180: '180px',
        320: '320px',
        400: '400px',
        480: '480px'
      },
      margin: {
        0.35: '35%',
        30: '120px',
        '50px': '50px',
        350: '350px'
      },
      maxWidth: {
        400: '400px',
        500: '500px',
        600: '600px',
        700: '700px',
        800: '800px',
        1400: '1400px',
        1800: '1800px'
      },
      minWidth: {
        280: '280px',
        400: '400px'
      }
      ,
      minHeight: {
        200: '200px',
        250: '250px'
      },
      padding: {
        30: '120px',
        240: '240px'
      },
      width: {
        0.3: '30%',
        100: '100px',
        272: '272px',
        288: '288px',
        250: '250px',
        330: '330px',
        400: '400px',
        420: '420px',
        500: '500px',
        650: '650px',
        800: '800px',
      },
    },
  },
  plugins: [],
}