import React, { FunctionComponent, useState } from "react"
import { NextSeo } from "next-seo"
import { GetStaticProps } from "next"
import dynamic from "next/dynamic"
import { Header } from "../components/Header"
import { MapLayout } from "../components/MapLayout"
import { MapPanel } from "../components/MapPanel"
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
  const [destination, setDest] = useState<Destination>(data[0])

  return (
    <>
      <NextSeo
        title="travelogue"
        canonical="https://davidkariuki.com/travelogue"
      />
      <Header></Header>
      <MapLayout>
        <MapPanel
          destination={destination}
          destinationChanged={setDest}
          destinations={data}
        />
        <Map
          destination={destination}
          destinationChanged={setDest}
          markers={data}
        />
      </MapLayout>
    </>
  )
}

export default Travelogue
