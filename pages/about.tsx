import React, { FunctionComponent } from "react"
import { NextSeo } from "next-seo"
import Link from "next/link"
import { Layout } from "../components/Layout"
import { Article } from "../styles/shared"

const About: FunctionComponent = () => {
  return (
    <Layout>
      <NextSeo title="about" canonical="https://davidkariuki.com/about" />
      <Article>
        <p>
          I am a software engineer currently living in London, UK. While I am
          Kenyan by nationality, all my early years were spent in Zambia. At the
          age of 17, I left Zambia and lived in my home country for 3 years
          before shipping off to the US for university. You could say my life
          has been somewhat nomadic.
        </p>
        <p>
          Perhaps because I have primarily lived in foreign countries, my
          wanderlust is pretty intense. I keep a
          <Link href="/travelogue">
            <a> travelogue </a>
          </Link>
          of all the places I have visited, which keeps motivating me to smother
          the world map with orange pins.
        </p>
        <p>
          The first time I encountered a computer was in 12th grade. Even though
          we were only taught simple document processing, it was all fascinating
          to me. My tech career began shortly after graduation. After learning
          how to build PCs and administer Microsoft networks, I officially
          became a bonafide IT guy.
        </p>
        <p>
          However, my interests in hardware quickly turned to software when I
          started university. I was particularly interested in applications of
          software engineering in medicine, but I ultimately sold out and became
          a web developer. Life is so unpredictable. You can see my current
          development setup on my
          <Link href="/uses">
            <a> uses </a>
          </Link>
          page.
        </p>
      </Article>
    </Layout>
  )
}

export default About
