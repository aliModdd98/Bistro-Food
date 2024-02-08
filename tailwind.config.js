/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
      fontWeight: {
        playfairRegular: 400,
        playfairMedium: 500,
      }, 
      fontStyle: {
        italic: 'italic',
      },
    },
  },
  plugins: [],
}

