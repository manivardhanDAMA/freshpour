/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D5A27",
        secondary: "#E8740C",
        fresh: "#FDF8EE",
        brandDark: "#1A1A1A"
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"]
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      },
      boxShadow: {
        clay: "12px 12px 28px rgba(139,103,59,.18), -10px -10px 24px rgba(255,255,255,.9)"
      }
    }
  },
  plugins: []
};
