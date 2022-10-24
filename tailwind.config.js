/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f5f5f5",
        secondary: "#1A3F93",
      },
      boxShadow: {
        "3xl": "1px 1px 8px 6px rgba(0, 0, 0, 0.05)",
      },
  },
  },
  plugins: [],
}