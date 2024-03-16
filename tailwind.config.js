/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the glob patterns as needed for your project's file structure
  ],
  theme: {
    extend: {
      height: {
        '70p': '70%', // Custom class for 70% height
      }
    },
  },
  plugins: [],
};