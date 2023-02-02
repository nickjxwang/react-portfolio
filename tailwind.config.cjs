/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  screen: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    fontFamily: {
      Poppins: 'Poppins',
      Paprika: 'Paprika',
      Inria: 'Inria Serif',
      FiraCode: 'Fira Code',
    },
    container: {
      center: true,
      padding: '4rem',
    },
    extend: {
      colors: {
        dark_primary: '#0F1624',
        dark_variant: '#3E444F',
        light_primary: '#F5F5F5',
        blueberry: '#687A8F',
        pantone: '#64CCC9',
      },
      backgroundImage: {
        primaryLinear: 'linear-gradient(180deg, #B6CCF5 0.48%, #D5E3F1 100%)',
      },
      dropShadow: {
        primary: '-2px 2px 10px rgba(223, 229, 236, 0.9)',
      },
    },
  },
  plugins: [],
}
