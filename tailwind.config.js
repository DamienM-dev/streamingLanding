/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        futura: ["Futura", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        topGradient: "#993000",
        bottomGradient: "#ffb520",
      },
    },
  },
  plugins: [],
};
