import React, { FunctionComponent } from "react"
import { Layout } from "../components/Layout"
import { Article } from "../components/PostBody/styles"

const About: FunctionComponent = () => {
  return (
    <Layout>
      <Article>
        <p>
          I am a software engineer currently living in London, UK. While I am
          Kenyan by nationality, all my early years were spent in Zambia. At the
          age of 17, I left Zambia and lived in my home country for 3 years
          before shipping off to the US for university. You could say my life
          has been rather nomadic.
        </p>
      </Article>
    </Layout>
  )
}

export default About
