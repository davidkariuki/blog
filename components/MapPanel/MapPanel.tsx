import React, { FunctionComponent, useRef, useEffect } from "react"
import { Content, Accordion, Label, Input, ImageContainer } from "./styles"
import { Destination } from "../../shared/types"
import { FormattedDate } from "../FormattedDate"

interface PanelProps {
  destinations: Destination[]
  destination: Destination
  destinationChanged(d: Destination): void
}

export const MapPanel: FunctionComponent<PanelProps> = ({
  destinations,
  destination,
  destinationChanged,
}) => {
  const itemRefs = useRef<HTMLLabelElement[]>([])

  useEffect(() => {
    const index = destinations.indexOf(destination)
    const ref = itemRefs.current[index]

    ref && ref.scrollIntoView({ behavior: "smooth" })
  }, [destination])

  return (
    <Accordion>
      {destinations.map((dest, index) => {
        return (
          <div key={index} onChange={() => destinationChanged(dest)}>
            <Input
              type="radio"
              name="destination"
              value={dest.name}
              id={`section-${index}`}
              onChange={() => {}}
              checked={destination && dest.name === destination.name}
            />
            <Label
              htmlFor={`section-${index}`}
              ref={(el) => (itemRefs.current[index] = el!)}
            >
              {dest.name}
              <FormattedDate dateString={dest.date} />
            </Label>
            <Content>
              <ImageContainer>
                {dest.image && <img src={dest.image} alt={dest.name} />}
              </ImageContainer>
              <p>{dest.description}</p>
            </Content>
          </div>
        )
      })}
    </Accordion>
  )
}
