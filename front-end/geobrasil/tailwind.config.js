/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Aeonik: ['Aeonik', 'sans-serif'],
        aeonikBold: ['AeonikBold'],
        aeonikBoldItalic: ['AeonikBoldItalic'],
      },
      colors: {
        primary: {
          100: '#103E13',
        },
      },
    },
  },
  plugins: [],
}

