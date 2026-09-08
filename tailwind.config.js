/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#030712',
          card: '#080e1e',
          cardHover: '#0d162e',
          border: 'rgba(56, 189, 248, 0.15)',
          cyan: '#06b6d4',
          sky: '#38bdf8',
          blue: '#2563eb',
          indigo: '#6366f1',
          purple: '#8b5cf6',
          violet: '#a855f7',
          emerald: '#10b981'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.3)',
        'neon-sky': '0 0 30px -5px rgba(56, 189, 248, 0.35)',
        'neon-indigo': '0 0 30px -5px rgba(99, 102, 241, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
