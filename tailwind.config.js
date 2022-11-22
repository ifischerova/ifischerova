/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["_includes/**/*.njk", "_site/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "600px",

      md: "900px",

      lg: "1200px",

      xl: "1440px",
    },
    extend: {
      colors: {
        "silver-begin": "#2E4057",
        "silver-end": "#DBCBD8",
        "black-begin": "#7F8c8D",
        "black-end": "#000000",
        "violet-start": "#A4508B",
        "violet-end": "#5F0A87",
      },
    },
  },
  fontFamily: {
    sans: ["Open Sans", "sans-serif"],
  },
  plugins: [],
};
