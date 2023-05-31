/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "menu-select-blue": "var(#4083FF)",
        "menu-divider-blue": "var(#5C687E)",
        "menu-blue": "var(#1E2433)",
        "menu-expanded-blue": "var(#191F2E)",
      }
    },
    keyframes: {
      grow: {
        '0%': { transform: 'scale(0%)' },
        '100%': { transform: 'scale(100%)' },
      },
      shrink: {
        '100%' : {transform: 'scale(100%)'},
        '0%': {transform: 'scale(0%)'}
      }
      
    },
    animation: {
      'grow': 'grow 0.2s forwards',
      'shrink': 'shrink 0.2s forwards'
    },
  },
  plugins: [],
}

