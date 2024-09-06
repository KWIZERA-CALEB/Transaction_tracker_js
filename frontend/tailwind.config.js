/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    extend: {
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft 0.5s ease-out',
      },
      colors: {
        'primaryLight': '#e0f2fe',
        'primaryDark': '#0c0a09',
        'primaryGray': '#171717',
        'secondary': '#1d4ed8'
      },
    },
  },
  plugins: [],
}

