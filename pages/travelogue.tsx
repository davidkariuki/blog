import React, { FunctionComponent } from "react"
import { NextSeo } from "next-seo"
import { GetStaticProps } from "next"
import dynamic from "next/dynamic"
import { Header } from "../components/Header"
import { MapLayout } from "../components/MapLayout"
import { getDestinations } from "../lib/destinations"
import { Destination } from "../shared/types"

const Map = dynamic<any>(
  (() => import("../components/Map").then((mod) => mod.Map)) as any,
  {
    ssr: false,
  }
)

export const getStaticProps: GetStaticProps = async () => {
  const data = await getDestinations()

  return {
    props: {
      data,
    },
  }
}

interface DestinationsProps {
  data: Destination[]
}

const Travelogue: FunctionComponent<DestinationsProps> = ({ data }) => {
  return (
    <>
      <NextSeo
        title="travelogue"
        canonical="https://davidkariuki.com/travelogue"
      />
      <Header></Header>
      <MapLayout>
        <Map markers={data} />
      </MapLayout>
    </>
  )
}

export default Travelogue
