/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",

  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#101010",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    backgroundImage: {
      'nightsky': "url('https://cdn.discordapp.com/attachments/1070934952910278716/1081074440865058886/nightsky.jpeg')"
    }
  },
  plugins: [],
};