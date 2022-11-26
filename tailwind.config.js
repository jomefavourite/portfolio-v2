/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-main": "#151515",
        darkCard: "#202022",
        lightGrey: "#5d5d5d",
      },
      fontFamily: {
        sans: ["var(--font-mulish)"],
      },
    },
  },
  plugins: [],
};
