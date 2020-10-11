import React, { FunctionComponent, useRef, useEffect } from "react"
import { Content, Accordion, Label, Input, ImageContainer } from "./styles"
import { Destination } from "../../shared/types"
import { FormattedDate } from "../FormattedDate"

interface PanelProps {
  destinations: Destination[]
  selectedDestination: Destination
  destinationChanged(d: Destination): void
}

export const MapPanel: FunctionComponent<PanelProps> = ({
  destinations,
  selectedDestination,
  destinationChanged,
}) => {
  const itemRefs = useRef<HTMLLabelElement[]>([])

  useEffect(() => {
    const index = destinations.indexOf(selectedDestination)
    const ref = itemRefs.current[index]

    if (ref) ref.scrollIntoView({ behavior: "smooth" })
  }, [selectedDestination])

  return (
    <Accordion>
      {destinations.map((dest, index) => {
        return (
          <div key={index} onChange={() => destinationChanged(dest)}>
            <Input
              type="radio"
              name="destination"
              value={dest.name}
              id={`section-${dest.id}`}
              onChange={() => {}}
              checked={dest.id === selectedDestination.id}
            />
            <Label
              htmlFor={`section-${dest.id}`}
              ref={(el) => (itemRefs.current[index] = el as HTMLLabelElement)}
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
