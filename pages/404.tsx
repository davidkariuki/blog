import Head from "next/head"
import { FunctionComponent } from "react"
import { Layout } from "../components/Layout"
import { CustomError } from "../components/CustomError"

const Custom404: FunctionComponent = () => {
  return (
    <Layout>
      <Head>
        <title>404</title>
      </Head>
      <CustomError code={404} message="This page could not be found" />
    </Layout>
  )
}

export default Custom404
