/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   background: "url('./src/assets/Background.png')",
      //   // "nature-dark": "url('/nature-dark.jpg')",
      // },
    },
    colors: {
      ...colors,
      inputBackground: "#FFFFFF",
      inputDivBackground: "rgba(255, 255, 255, 0.2)",
      buttonBackground: "#F9A51A",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
