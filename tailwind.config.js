/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '9/16': '9 / 16',
        '2/1': '2 / 1',
      },
    },
  },
  plugins: [],
}

