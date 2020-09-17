import React, { FunctionComponent } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "../../components/Layout";
import { PostBody } from "../../components/PostBody";
import { getAllPostIds, getPostData } from "../../lib/posts";

interface PostData {
  postData: {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
  };
}

const Post: FunctionComponent<PostData> = ({ postData }) => {
  return (
    <Layout>
      <PostBody data={postData} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);

  return {
    props: {
      postData,
    },
  };
};

export default Post;
