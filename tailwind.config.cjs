const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
      "3xl": "1920px",
    },
    extend: {
      colors: {
        "nifty-blue": "#2FB4FF",
        "nifty-red": "#FF3D83",
        "nifty-green": "#3DF0C5",
        "nifty-yellow": "#FFF96A",
        "nifty-black": "#262637",
        "nifty-dark-gray": "#8A8A8F",
        "nifty-gray": "#D5D5DC",
        "nifty-light-gray": "#EDEDED",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
