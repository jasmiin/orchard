/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{html,js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["OpenSans", "OpenSans_Condensed","OpenSans_SemiCondensed"],
      },
    },
  },
  plugins: [],
};
