/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offPink: "#F0E3DA",
        olive: "#7a731d",
        offBlack: "#111313",
        offWhite: "#F7F8E8",
        tagBlue: "#388AFF",
        tagPink: "#FE8AA7",
        lightWhite: "#FBFBF1",
        lightYellow: "#FFFFF9",
        lightPurple: "#EDE5FB",
        offGreen: "#BEFD4E",
        offGray: "#FBFBEF",
        offBlue: "#40C0F3",
        brightGreen: "#AAFDBE",
        bronze: "#BB552D",
        midBlue: "#709AF3"
      },
      fontFamily: {
        firaM: "Fira Medium",
        firaB: "Fira Bold",
        firaRet: "Fira Ret",
        firaReg: "Fira Reg",
        firaL: "Fira Light",
        jacklane: "Jack Lane",
        thunder: "Love of Thunder",
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
