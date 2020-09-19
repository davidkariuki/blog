import React, { FunctionComponent } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "../components/Navbar";
import { MapLayout } from "../components/MapLayout";
import { getDestinations } from "../lib/destinations";
import { Destination } from "../shared/types";

const Map = dynamic<any>(
  (() => import("../components/Map").then((mod) => mod.Map)) as any,
  {
    ssr: false,
  }
);

export const getStaticProps: GetStaticProps = async () => {
  const data = await getDestinations();

  return {
    props: {
      data,
    },
  };
};

interface DestinationsProps {
  data: Destination[];
}

const Travelogue: FunctionComponent<DestinationsProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>dk | travelogue</title>
      </Head>
      <Navbar></Navbar>
      <MapLayout>
        <Map markers={data} />
      </MapLayout>
    </>
  );
};

export default Travelogue;
