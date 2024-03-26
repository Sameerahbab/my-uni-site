/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px"
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem'
        }
      },
      colors: {
        "color-primary": "#01051e",
        "color-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "color-secondary": "#ff7d3b",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "#A427DF",
      },
      animation:{
        Blob:"Blob 4s infinite" 
      },
      keyframes:{
        Blob:{
          "0%": {
            transform: " scale(1)",
          },
          "33%": {
            transform: " scale(1.1)",
          },
          "66%": {
            transform: " scale(0.9)",
          },
          "100%": {
            transform: " scale(1)",
          },
        }
      }
    },
    
  },
  plugins: [],
}

