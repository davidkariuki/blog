module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      flexGrow: ["first"],
      margin: ["last"],
    },
  },
  plugins: [],
}
