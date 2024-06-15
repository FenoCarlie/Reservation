/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        northwell: ["Northwell", "sans-serif"],
        tnor: ["Tnor", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
