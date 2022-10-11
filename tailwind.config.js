/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./common/**/*.{js,ts,jsx,tsx}"],
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
        lightPurple: "#EDE5FB"
      },
      fontFamily: {
        firaM: "Fira Medium",
        firaB: "Fira Bold",
        firaRet: "Fira Ret",
        firaReg: "Fira Reg",
        firaL: "Fira Light",
        jacklane: "Jack Lane"
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
