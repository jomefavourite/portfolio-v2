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
        lightGrey: "#828282",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
