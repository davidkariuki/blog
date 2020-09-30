import "../styles/global.css"
import "mapbox-gl/dist/mapbox-gl.css"
import { AppProps } from "next/app"
import { DefaultSeo } from "next-seo"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        canonical="https://davidkariuki.com"
        openGraph={{
          description:
            "Thoughts, learnings and life experiences of a software engineer.",
          type: "website",
          locale: "en_GB",
          url: "https://davidkariuki.com",
          site_name: "David Kariuki | Software Engineer",
          images: [
            {
              url: "/images/logo.png",
              width: 512,
              height: 512,
              alt: "Logo",
            },
          ],
        }}
        twitter={{
          handle: "@davidkariuki",
          site: "https://davidkariuki.com",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
