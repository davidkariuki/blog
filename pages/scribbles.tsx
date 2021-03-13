import { FC } from "react"
import { NextSeo } from "next-seo"
import { GetStaticProps } from "next"
import { getSortedPostsData } from "../lib/posts"
import { Layout } from "../components/Layout"
import { PostsList } from "../components/PostsList"
import type { PostMetadata } from "../shared/types"

interface ScribblesProps {
  allPostsData: PostMetadata[]
}

const Scribbles: FC<ScribblesProps> = ({ allPostsData }) => {
  const categories = getCategories(allPostsData)

  return (
    <Layout>
      <NextSeo
        title="Scribbles"
        canonical="https://davidkariuki.com/scribbles"
      />
      <PostsList categories={categories} posts={allPostsData} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}

export default Scribbles

// return unique categories
const getCategories = (posts: PostMetadata[]): string[] => {
  const categories: string[] = posts.map((post) => post.category)

  return [...new Set(categories)]
}
