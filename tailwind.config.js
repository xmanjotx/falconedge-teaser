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
        border: "var(--accent-color)",
        "border-subtle": "rgba(var(--accent-rgb), 0.3)",
        foreground: "var(--accent-color)",
        "foreground-white": "#FFFFFF",
        "foreground-muted": "rgba(var(--accent-rgb), 0.7)",
        "foreground-subtle": "rgba(var(--accent-rgb), 0.5)",
        accent: {
          DEFAULT: "var(--accent-color)",
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
          glow: "rgba(var(--accent-rgb), 0.3)",
        },
        "text-on-accent": "var(--text-on-accent)",
      },
      fontFamily: {
        sans: ['sans-serif'],
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 40px rgba(var(--accent-rgb), 0.2)',
        'glow-lg': '0 0 80px rgba(var(--accent-rgb), 0.3)',
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
