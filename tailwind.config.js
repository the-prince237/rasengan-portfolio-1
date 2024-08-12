import { adaptPath } from "rasengan";

/** @type {import('tailwindcss').Config} */
export default {
  content: adaptPath(["./src/**/*.{ts,tsx,js,jsx}"]),
  theme: {
    extend: {
      colors: {
        primary: "#F1FF9D",
        primaryLight: "#333431",
        gray: "#757980",
        darkGray: "#1F1F1F",
        black: "#232327",
        blue: "#233346",
        blueLight: "#D5E4F4",
        pink: "#FF2787",
        pinkLight: "#3F3238",

      },
      fontFamily: {
        Aubrey: ["Aubrey", "sans-serif"],
        Arial: ["Arial", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
