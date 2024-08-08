/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite BE VLG"', 'sans-serif'],
        bodoni: ["Bodoni Moda SC", 'serif'],
        roboto: ["Roboto Slab", "serif"],
        cinzel: ["Cinzel", "serif"],
        garmond: ["EB Garamond", "serif"],
      },
    },
  },
  plugins: [],
}

