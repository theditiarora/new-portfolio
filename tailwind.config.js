/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'custom': '500px'
      },

      width: {
        'customm': '500px'
      },

      colors : {
        'purple-c': '#8A2DFF',
      },

      fontFamily: {
        'rob': 'Roboto mono',
        'dm': 'Dm Mono'
      },

      fontSize: {
        '4xl': '3rem'
      }
    },
  },
  plugins: [],
}
