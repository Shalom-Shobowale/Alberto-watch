/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        bgColor: "#ffffff",
        textBg: "#000000",
        touch: "#003566"
      },
    },
    fontFamily:{
      Outfit:["Outfit","open sans"]
    }
  },
  plugins: [],
}

