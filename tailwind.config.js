module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        quran: {
          100: "#EFF8F8",
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
