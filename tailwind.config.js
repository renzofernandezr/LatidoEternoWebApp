/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the glob patterns as needed for your project's file structure
  ],
  theme: {
    extend: {
      borderWidth: {
        '6': '6px', // or '0.375rem', or '3px' if you want a 3px border
      }
    },  
  },
  plugins: [],
};