import React, { FunctionComponent } from "react";
import Head from "next/head";
import { AppProps } from "next/app";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Bloggies</title>
      </Head>
      <main className="main">
        <Component {...pageProps} />
      </main>
    </>
  );
  return <Component {...pageProps} />;
};

export default App;
