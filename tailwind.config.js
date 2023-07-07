/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "7rem"
    },
  },
  darkMode:'class',
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
