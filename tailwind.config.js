module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        icicle: {
          DEFAULT: "#1c1c1e",
        },
      },
    },
  },
  variants: {
    extend: {
      flexGrow: ["first"],
      margin: ["last"],
    },
  },
  plugins: [],
}
