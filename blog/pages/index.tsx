import Link from "next/link";
import Head from "next/head";
import { FunctionComponent } from "react";
import { Layout } from "../components/Layout";

const Home: FunctionComponent = () => {
  return (
    <Layout>
      <Head>
        <title>dk | blog</title>
      </Head>

      <Link href="/blog">
        <a>goTo Blog</a>
      </Link>
    </Layout>
  );
};

export default Home;
