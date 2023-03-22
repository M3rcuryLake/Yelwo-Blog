/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html","./public/post/*.html"],
  theme: {
    extend: {
      fontFamily :{
        Neucha :['Neucha'],
        PermanentMarker :['Permanent Marker'],
        BebasNeue :['BebasNeue'],
        JungleRock :['JungleRock'],
        Funbox: ['Funbox']
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}


//Basic Fonts Included
