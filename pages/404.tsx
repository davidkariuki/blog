import { NextSeo } from "next-seo"
import { FunctionComponent } from "react"
import { Layout } from "../components/Layout"
import { CustomError } from "../components/CustomError"

const Custom404: FunctionComponent = () => {
  return (
    <Layout>
      <NextSeo title="404 nothing to see here." />
      <CustomError code={404} message="This page could not be found" />
    </Layout>
  )
}

export default Custom404
