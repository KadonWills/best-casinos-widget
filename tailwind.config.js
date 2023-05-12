const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "index.html",
    "./src/*.{css,html,js,jsx}",
    "./src/**/*.{css,html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sans" : ["Montserrat", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

