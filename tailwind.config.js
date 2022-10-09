/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./common/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offPink: "#F3E2D9",
        olive: "#7a731d",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
