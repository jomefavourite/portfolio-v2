/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-main": "#202022",
        dark: "#24292F",
        "dark-secondary": "#57606A",
        imagination: "#F6F8FA",
        white: "#ffffff",
        dim: "#151515",
        "dim-body": "#777778",
        event: "#EFF2FF",
        code: "#FFEFF7",
        design: "#E4F6FF",
        article: "#EBEEF0",
      },
    },
  },
  plugins: [],
};
