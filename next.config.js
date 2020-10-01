const withReactSvg = require("next-react-svg")
const path = require("path")

module.exports = withReactSvg({
  include: path.resolve(__dirname, "public/images"),
  webpack(config, _options) {
    return config
  },

  async redirects() {
    return [
      {
        source: "/blog/:date(\\d{4}\\/\\d{2}\\/\\d{2})/:slug",
        destination: "/scribbles/:slug",
        permanent: true,
      },
    ]
  },
})
