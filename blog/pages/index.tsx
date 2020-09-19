import Head from "next/head";
import { FunctionComponent } from "react";
import { Layout } from "../components/Layout";

const Home: FunctionComponent = () => {
  return (
    <Layout>
      <Head>
        <title>dk | home</title>
      </Head>
    </Layout>
  );
};

export default Home;
