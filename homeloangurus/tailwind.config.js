/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '200px',
      'md': '900px',
      'lg': '1280px',
    },
    extend: {},
  },
  plugins: [],
}