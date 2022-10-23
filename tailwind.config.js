/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["templates/*.{html,js}"],
    theme: {
    screens: {
        'sm': '600px',

        'md': '900px',
  
        'lg': '1200px',
  
        'xl': '1440px',
        },
      extend: {},
    },
    plugins: [],
  }