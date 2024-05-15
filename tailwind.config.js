/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'plant':"url(/assets/plant.jpg)"
      }
    },
  },
  plugins: [],
}