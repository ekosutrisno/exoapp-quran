const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        quran: {
          "gray-100": "#F7F7F7",
          "brown-text": "#584810",
          "green-darkest": "#003C3C",
        },
      },
      fontFamily: {
        quran: ["lpmq", "Arial", "sans-serif"],
        exo: ["Quicksand"],
      },
      scale: {
        quran: "1.005",
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover", "focus"],
    },
  },
  plugins: [],
};
