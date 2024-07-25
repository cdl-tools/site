/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.vue', './index.html'],
  purge: ['./src/**/*.vue', './index.html'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
