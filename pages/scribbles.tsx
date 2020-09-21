import React, { FunctionComponent } from "react"
import Head from "next/head"
import { GetStaticProps } from "next"
import { getSortedPostsData } from "../lib/posts"
import { Layout } from "../components/Layout"
import { PostsList } from "../components/PostsList"
import type { PostMetadata } from "../shared/types"

interface ScribblesProps {
  allPostsData: PostMetadata[]
}

const Scribbles: FunctionComponent<ScribblesProps> = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
        <title>dk | scribbles</title>
      </Head>
      <PostsList posts={allPostsData} />
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
