import { FC, useState } from "react"
import { NextSeo } from "next-seo"
import { GetStaticProps } from "next"
import dynamic from "next/dynamic"

import { Header } from "../components/Header"
import { getDestinations } from "../lib/destinations"
import { Destination } from "../shared/types"

const MapLayout = dynamic<any>(
  () => import("../components/MapLayout").then((mod) => mod.MapLayout),
  { ssr: false }
)

const MapPanel = dynamic<any>(
  () => import("../components/MapPanel").then((mod) => mod.MapPanel),
  { ssr: false }
)

const Map = dynamic<any>(
  () => import("../components/Map").then((mod) => mod.Map),
  { ssr: false }
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
  const [selectedDestination, setSelectedDestination] = useState<Destination>()

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
