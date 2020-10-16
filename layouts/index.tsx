import React, { FunctionComponent } from "react"
import { NextSeo } from "next-seo"
import { Layout } from "../components/Layout"
import { PostBody } from "../components/PostBody"

interface Props {
  frontMatter: {
    id: string
    title: string
    date: string
    description: string
  }
}

const Posts: FunctionComponent<Props> = ({ children, frontMatter }) => {
  return (
    <Layout>
      <NextSeo
        canonical={`https://davidkariuki.com/scribbles/${frontMatter.id}`}
        title={frontMatter.title}
        description={frontMatter.description}
      />
      <PostBody frontMatter={frontMatter}>{children}</PostBody>
    </Layout>
  )
}

export default Posts
