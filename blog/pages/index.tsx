import React from "react";
import Head from "next/head";
import { Feed } from "../components/Feed";

export default function Front() {
  return (
    <>
      <Head>
        <title>Front page of the internet</title>
      </Head>
      <main>
        <Feed />
      </main>
    </>
  );
}
