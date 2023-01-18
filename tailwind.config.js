/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        "Red Hat Display": ["Red Hat Display", "sans-serif"],
      },

      colors: {
        teal: "#4D96A9",
        tealHover: "#71C0D4",
        softPurple: "#855FB1",
        softPurpleHover: "#B18BDD",
        darkBlue: "#28283D",
        grey: "#87879D",
        turqoise: "#8FE3F9",
        violet: "#D9B8FF",
        white: "#FAFAFA",
        bg: "#f2f2f2",
      },

      fontSize: {
        h1: ["64px", { lineHeight: "64px", fontWeight: "900" }],
        h2: ["40px", { lineHeight: "44px", fontWeight: "900" }],
        overline: [
          "16px",
          { lineHeight: "26px", letterSpacing: "4px", fontWeight: "900" },
        ],
        body: ["18px", { lineHeight: "26px", fontWeight: "500" }],
      },
    },
  },
  plugins: [],
};
