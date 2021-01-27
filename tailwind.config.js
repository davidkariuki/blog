module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
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
