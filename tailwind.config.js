module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      colors: {
        homeImg: '#fae9ff',
        ARbg: '#F978FF',
        page404A: "#1C1023",
        page404B: "#B53FA6",
        page404C: "#351945",
        StudyCards: "#255A81",
        bgImg: "#000104",
      },
      zIndex: {
        "-1": "-1",
      },
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'carattere': ['Carattere', 'cursive'],
      "fontVollkorn": ['Vollkorn'],
      'body': ['Open Sans'],
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
}
