/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Public': 'Public Sans',
      },
      colors: {
        'blueCBC': '#103A62',
      },
      screens: {
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
}