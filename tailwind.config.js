/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './source/**/*.{html,ejs}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    colors: {
      'primary': '#6366fe',
      'dark': '#686868',
      'white': '#ffffff',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
  ],
}

