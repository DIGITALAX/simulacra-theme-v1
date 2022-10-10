/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./common/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offPink: "#F0E3DA",
        olive: "#7a731d",
        offBlack: "#111313"
      },
      fontFamily: {
        firaM: "Fira Medium",
        firaB: "Fira Bold"
      },
      truncate: {
        lines: {
          2: "2",
        },
      },
    },
  },
  plugins: [require("tailwindcss-truncate-multiline")()],
  darkMode: "class",
};
