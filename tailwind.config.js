/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg': {'max': '1023px'},
    },
    extend: {
      colors: {
        "menu-select-blue": "var(#4083FF)",
        "menu-divider-blue": "var(#5C687E)",
        "menu-blue": "var(#1E2433)",
        "menu-expanded-blue": "var(#191F2E)",
      }
    }
  },
  plugins: [],
}

