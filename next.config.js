const path = require("path")
const withReactSvg = require("next-react-svg")
const withMdxEnhanced = require("next-mdx-enhanced")
const rehypePrism = require("@mapbox/rehype-prism")

module.exports = withMdxEnhanced({
  defaultLayout: true,
  fileExtensions: ["mdx", "md"],
  rehypePlugins: [rehypePrism],
  remarkPlugins: [],
})(
  withReactSvg({
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
)
