import Head from "next/head";
import { FunctionComponent } from "react";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../lib/posts";
import { Layout } from "../components/Layout";
import { PostsList } from "../components/PostsList";

interface BlogProps {
  allPostsData: any[];
}

const Blog: FunctionComponent<BlogProps> = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
        <title>dk | blog</title>
      </Head>
      <PostsList posts={allPostsData} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

export default Blog;
