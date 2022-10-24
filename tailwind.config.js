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
      extend: {
        colors: {
          'silver-begin':'#2E4057',
          'silver-end':'#DBCBD8'
        }
      },
    },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
      },
    plugins: [],
  }