/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // theme: {
  //   extend: {},
  // },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1d7291",

          secondary: "#30e533",

          accent: "#f91640",

          neutral: "#352640",

          "base-100": "#F4EAF5",

          info: "#31AFDD",

          success: "#2BCAAA",

          warning: "#E7940D",

          error: "#E92F25",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
