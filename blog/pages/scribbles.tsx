import Head from "next/head";
import React, { FunctionComponent } from "react";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../lib/posts";
import { Layout } from "../components/Layout";
import { PostsList } from "../components/PostsList";

interface ScribblesProps {
  allPostsData: any[];
}

const Scribbles: FunctionComponent<ScribblesProps> = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
        <title>dk | Scribbles</title>
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

export default Scribbles;
