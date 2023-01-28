/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["_includes/**/*.njk", "_site/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "600px",

      md: "950px",

      lg: "1200px",

      xl: "1440px",
    },
    extend: {
      colors: {
        "violet-start": "#A4508B",
        "violet-end": "#5F0A87",
        "violet": "#5A189A",
        "dark-violet": "#240046",
        "very-dark-violet": "#10002B",
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
