/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        "background-alt": "#0a0a0a",
        "background-elevated": "#111111",
        border: "#ffd902",
        "border-subtle": "rgba(255, 217, 2, 0.3)",
        foreground: "#ffd902",
        "foreground-white": "#FFFFFF",
        "foreground-muted": "rgba(255, 217, 2, 0.7)",
        "foreground-subtle": "rgba(255, 217, 2, 0.5)",
        accent: {
          DEFAULT: "#ffd902",
          light: "#ffe534",
          dark: "#e6c302",
          glow: "rgba(255, 217, 2, 0.3)",
        },
      },
      fontFamily: {
        sans: ['sans-serif'],
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 40px rgba(255, 217, 2, 0.2)',
        'glow-lg': '0 0 80px rgba(255, 217, 2, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 60s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
      },
    },
  },
  plugins: [],
}
