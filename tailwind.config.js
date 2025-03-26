/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1A2A44',
        'cyan-accent': '#00D4FF',
        'purple-accent': '#A855F7',
      },
    },
  },
  plugins: [],
};