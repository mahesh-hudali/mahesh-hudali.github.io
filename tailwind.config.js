/** @type {import('tailwindcss').Config} */
import colors, { gray } from "tailwindcss/colors";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    colors: {
      ...colors,
      blue: "#1FB9EC",
      yellow: "#F0AB00",
      white: "#FFFFFF",
      navy: "#001435",
      grey: "#CCCCCC",
      "light-navy": "#023384",
      "light-blue": "#14BBEA",
    },
    fontFamily: {
      Raleway: ["Raleway", "sans-serif"],
      Roboto: ["Roboto", "serif"],
      Open: ["Open Sans", "serif"],
    },
    extend: {
      keyframes: {
        floatUp: {
          "0%": { top: "100%", right: "20px" },
          "100%": { top: "-100%", right: "20px" },
        },
        moveUp: {
          "0%": { margin: "1" }, // starting line-height
          "100%": { lineHeight: "1.2" }, // increase by 5px assuming font size around 20px
        },
        moveDown: {
          "0%": { lineHeight: "1.2" }, // starting line-height
          "100%": { lineHeight: "1" }, // increase by 5px assuming font size around 20px
        },
      },
      animation: {
        moveUp: "moveUp 1s ease-out forwards", // Custom animation definition
        moveDown: "moveDown 1s ease-out forwards",
        floatUp: "floatUp 15s linear infinite",
      },
    },
  },
  plugins: [],
};
