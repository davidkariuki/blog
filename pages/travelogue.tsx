import React, { FC, useState } from "react"
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

const Travelogue: FC<DestinationsProps> = ({ data }) => {
  const [selectedDestination, setSelectedDestination] = useState(data[0])

  return (
    <>
      <NextSeo
        title="travelogue"
        canonical="https://davidkariuki.com/travelogue"
      />
      <Header></Header>
      <MapLayout>
        <MapPanel
          selectedDestination={selectedDestination}
          destinationChanged={setSelectedDestination}
          destinations={data}
        />
        <Map
          selectedDestination={selectedDestination}
          destinationChanged={setSelectedDestination}
          markers={data}
        />
      </MapLayout>
    </>
  )
}

export default Travelogue
