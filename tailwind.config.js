/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        cardShadow : "0px 8px 10px -2px rgba(0, 0, 0, 0.25)"
      },
      backgroundImage: {
        blueGradient : "linear-gradient(90deg, #60A5FA 0%, #81E6ED 100%)",
        greenGradient : "linear-gradient(90deg, #50EC7B 0%, #9BFB92 100%)",
        redGradient : "linear-gradient(90deg, #FA6060 0%, #FFAC7D 100%)"
      }
    },
  },
  plugins: [],
  
}