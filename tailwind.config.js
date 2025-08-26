/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary : ['Asap', 'sans-serif'],
        lato: ['Lato', 'serif'], 
        source : ["Source Sans 3", "serif" ]
      },
      boxShadow: {
        'custom-shadow': '0px 1px 4px 0px #CCCCCC',
      },
    },
  },
  plugins: [],
}