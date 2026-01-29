/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      colors: {
        'budi-lime': 'rgb(var(--color-budi-lime) / <alpha-value>)',
        'budi-lime-light': 'rgb(var(--color-budi-lime-light) / <alpha-value>)',
        'budi-lime-dark': 'rgb(var(--color-budi-lime-dark) / <alpha-value>)',
        'budi-orange': 'rgb(var(--color-budi-orange) / <alpha-value>)',
        'budi-orange-dark': 'rgb(var(--color-budi-orange-dark) / <alpha-value>)',
        'budi-dark-green': 'rgb(var(--color-budi-dark-green) / <alpha-value>)',
        'budi-navy': '#0000B9',
        'budi-pink': 'rgb(var(--color-budi-pink) / <alpha-value>)',
        'budi-pink-dark': 'rgb(var(--color-budi-pink-dark) / <alpha-value>)',
        'budi-gray-dark': 'rgb(var(--color-budi-gray-dark) / <alpha-value>)',
        'budi-red': 'rgb(var(--color-budi-red) / <alpha-value>)',

        'background': 'rgb(var(--color-background) / <alpha-value>)',
        'card': 'rgb(var(--color-card) / <alpha-value>)',
        'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        'border-color': 'rgb(var(--color-border) / <alpha-value>)',
        'input-bg': 'rgb(var(--color-input-bg) / <alpha-value>)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      fontSize: {
        'med': '0.9375rem', // 15px
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
         'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-delayed': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-up': {
          'from': { transform: 'translateY(100%)' },
          'to': { transform: 'translateY(0)' },
        },
        'spin': {
          'from': { 'transform': 'rotate(0deg)' },
          'to': { 'transform': 'rotate(360deg)' }
        },
        'pop': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3) rotate(-10deg)' },
        },
        'toast-in-out': {
          '0%': { transform: 'translate(-50%, 100%)', opacity: '0' },
          '15%': { transform: 'translate(-50%, 0)', opacity: '1' },
          '85%': { transform: 'translate(-50%, 0)', opacity: '1' },
          '100%': { transform: 'translate(-50%, 100%)', opacity: '0' },
        },
        'pulse-border': {
          '0%, 100%': { 'border-color': 'rgb(var(--color-budi-lime) / 0.7)' },
          '50%': { 'border-color': 'rgb(var(--color-budi-lime) / 1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.3s ease-out forwards',
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'fade-in-delayed': 'fade-in-delayed 0.6s ease-out 2s forwards',
        'slide-in-up': 'slide-in-up 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        'spin': 'spin 1s linear infinite',
        'pop': 'pop 0.3s ease-out',
        'toast-in-out': 'toast-in-out 3s ease-in-out forwards',
        'pulse-border': 'pulse-border 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  },
  plugins: [
    function({ addVariant }) {
      // Monochrome-specific hover variant
      addVariant('monochrome-hover', '.monochrome &:hover');
      // Group hover + monochrome variant
      addVariant('monochrome-group-hover', '.monochrome .group:hover &');
    }
  ],
}
