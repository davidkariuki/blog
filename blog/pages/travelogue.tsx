import Head from "next/head";
import { FunctionComponent } from "react";
import { Navbar } from "../components/Navbar";
import { Trips } from "../components/Trips";

const Travelogue: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>dk | travelogue</title>
      </Head>
      <Navbar></Navbar>
      <Trips />
    </>
  );
};

export default Travelogue;
