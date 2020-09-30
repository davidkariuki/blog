import Head from "next/head"
import { FunctionComponent } from "react"
import { Layout } from "../components/Layout"
import { Landing } from "../components/Landing"

const Home: FunctionComponent = () => {
  return (
    <Layout>
      <Head>
        <title>home</title>
      </Head>
      <Landing />
    </Layout>
  )
}

export default Home
