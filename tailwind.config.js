/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      black100: "#111111",
      white: "#FFFFFF",
      gray: "#888888",
      gray100: "#333",
    },
    textColor: {
      white: "#FFFFFF",
      normal: "#FFFFFF",
      weak: "#888888",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        frame: 'url("/frame-bg.jpg")',
        gradient: "linear-gradient(to right, #12A2E9, #D946EF)",
      },
      boxShadow: {
        normal: "0 0 0 1px #333",
      },
    },
  },
  plugins: [],
};
