import React, { FunctionComponent } from "react"
import { NextSeo } from "next-seo"
import { GetStaticPaths, GetStaticProps } from "next"
import { getAllPostIds, getPostData } from "../../lib/posts"
import { Layout } from "../../components/Layout"
import { PostBody } from "../../components/PostBody"

interface PostData {
  postData: {
    id: string
    title: string
    date: string
    description: string
    contentHtml: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string)

  return {
    props: {
      postData,
    },
  }
}

const Post: FunctionComponent<PostData> = ({ postData }) => {
  return (
    <Layout>
      <NextSeo
        canonical={`https://davidkariuki.com/scribbles/${postData.id}`}
        title={postData.title}
        description={postData.description}
      />
      <PostBody data={postData} />
    </Layout>
  )
}

export default Post
