import { FC } from "react"
import { NextSeo } from "next-seo"
import { Layout } from "../components/Layout"
import { PostBody } from "../components/PostBody"

interface Props {
  frontMatter: {
    id: string
    __resourcePath: string
    title: string
    date: string
    description: string
  }
}

const Posts: FC<Props> = ({ children, frontMatter }) => {
  const path = frontMatter.__resourcePath.replace(/\.mdx/, "")

  return (
    <Layout>
      <NextSeo
        canonical={`https://davidkariuki.com/${path}`}
        title={frontMatter.title}
        description={frontMatter.description}
      />
      <PostBody frontMatter={frontMatter}>{children}</PostBody>
    </Layout>
  )
}

export default Posts
