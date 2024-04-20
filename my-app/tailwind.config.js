/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        moveInRight: "moveInRight 1s ease forwards",
      },
      keyframes: {
        moveInRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(-100%)",
          },
          "100%": {
            // Corrected the closing keyframe
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
      screens: {
        xs: "375px",
      },
      fontFamily: {
        jersey: ["Jersey 10", "sans-serif"],
      },
    },
  },
  plugins: [],
};
