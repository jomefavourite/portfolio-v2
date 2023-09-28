/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-main': '#151515',
        darkCard: '#202022',
        lightGrey: '#828282',
      },
      fontFamily: {
        sans: ['inter'],
      },
    },
  },
  plugins: [],
};
