/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1000px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

