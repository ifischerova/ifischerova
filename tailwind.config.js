/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["_includes/**/*.njk", "index.html"],
  theme: {
    screens: { sm: "600px", md: "950px", lg: "1200px", xl: "1440px" },
    extend: {
      colors: {
        ink: "#0f172a",
        surface: "#1e293b",
        line: "#334155",
        fog: "#94a3b8",
        cloud: "#e2e8f0",
        teal: "#2dd4bf",
        "teal-deep": "#14b8a6",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
