/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.vue", "./index.html", "./src/formkit.theme.ts"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
