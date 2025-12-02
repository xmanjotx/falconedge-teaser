/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        "background-alt": "#141414",
        border: "#2A2A2A",
        foreground: "#FFFFFF",
        "foreground-muted": "#888888",
        accent: {
          DEFAULT: "#F97316", // Orange-500
          secondary: "#EA580C", // Orange-600
          glow: "rgba(249, 115, 22, 0.3)",
        },
      },
      fontFamily: {
        sans: ['Lexend', 'Inter', 'sans-serif'],
        display: ['Lexend', 'Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 229, 255, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
