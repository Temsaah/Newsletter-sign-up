/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        test: "min-content 1fr",
      },
      colors: {
        "primary-tomato": "hsl(4, 100%, 67%)",
        "neutral-dark-slate-grey": "hsl(234, 29%, 20%)",
        "neutral-charcoal-grey": "hsl(235, 18%, 26%)",
        "neutral-grey": "hsl(231, 7%, 60%)",
      },
      fontFamily: {
        rob: ["Roboto"],
      },
    },
  },
  plugins: [require("tailwind-fontawesome")],
};
