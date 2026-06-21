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
        past: "#64748b",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      keyframes: {
        // Teal halo that breathes — used on the Digital Academy career-switch dot.
        glow: {
          "0%, 100%": { boxShadow: "0 0 3px 1px rgba(45, 212, 191, 0.35)" },
          "50%": { boxShadow: "0 0 11px 4px rgba(45, 212, 191, 0.85)" },
        },
      },
      animation: {
        glow: "glow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
