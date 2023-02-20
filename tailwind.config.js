/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        50: '12.5rem',
        75: '18.75rem'
      }
    },
  },
  plugins: [],
}
