/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        bgColor: "#ffffff",
        textBg: "#000000",
        touch: "#0466c8"
      },
    },
    fontFamily:{
      Outfit:["Outfit","open sans"]
    }
  },
  plugins: [
    function({addUtilities }){
      const newUtilities ={
        ".no-scrollbar::-webkit-scrollbar":{
          display:"none",
        },
        "no-scrollbar": {
          "ms-overflow-style": "none",
           "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities)
    }
  ],
}

