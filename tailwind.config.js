/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			'background-alt': '#0a0a0a',
  			'background-elevated': '#111111',
  			border: 'hsl(var(--border))',
  			'border-subtle': 'rgba(var(--accent-rgb), 0.3)',
  			foreground: 'hsl(var(--foreground))',
  			'foreground-white': '#FFFFFF',
  			'foreground-muted': 'rgba(var(--accent-rgb), 0.7)',
  			'foreground-subtle': 'rgba(var(--accent-rgb), 0.5)',
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				light: 'var(--accent-light)',
  				dark: 'var(--accent-dark)',
  				glow: 'rgba(var(--accent-rgb), 0.3)',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			'text-on-accent': 'var(--text-on-accent)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'sans-serif'
  			],
  			display: [
  				'Bebas Neue"',
  				'Impact',
  				'sans-serif'
  			],
  			mono: [
  				'JetBrains Mono',
  				'monospace'
  			]
  		},
  		boxShadow: {
  			glow: '0 0 40px rgba(var(--accent-rgb), 0.2)',
  			'glow-lg': '0 0 80px rgba(var(--accent-rgb), 0.3)'
  		},
  		animation: {
  			'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'spin-slow': 'spin 60s linear infinite',
  			'fade-in': 'fadeIn 0.5s ease-out'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		letterSpacing: {
  			'ultra-wide': '0.2em'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
