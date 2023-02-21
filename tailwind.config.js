
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
      fontFamily: {
        // sans: ['Poppins', ...defaultTheme.fontFamily.sans]
        poppins: ['Poppins'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
