/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          400: "#5B8FB0",
          500: "#3F6E8F",
          600: "#2F5D7C",
        },
      },
      fontWeight: {
        extralight: "300",
      },
      transitionDuration: {
        700: "700ms",
      },
    },
  },
  plugins: [],
};
