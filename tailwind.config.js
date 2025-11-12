// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#EAE0D5",
        "dark-green": "#3C4D3D",
        tan: "#A69078",
        "dark-border": "#2E2E2E",
        "off-white": "#D9D2C7",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
