/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.vue', './index.html', './src/formkit.theme.ts'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
