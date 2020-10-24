import { NextSeo } from "next-seo"
import { FC } from "react"
import { Layout } from "../components/Layout"
import { Landing } from "../components/Landing"

const Home: FC = () => {
  return (
    <Layout>
      <NextSeo
        title="David Kariuki | Software Engineer"
        description="Thoughts, learnings and life experiences of a software engineer."
      />
      <Landing />
    </Layout>
  )
}

export default Home
