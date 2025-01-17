/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "coffee-dark": "#4A3728",
        "coffee-medium": "#8B7355",
        "coffee-light": "#D2B48C",
        cream: "#FFF5E6",
      },
    },
  },
  // ...rest of your config

  // theme: {
  //   extend: {},
  // },
  plugins: [],
};
