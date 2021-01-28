import { FC, useRef, useEffect } from "react"
import { Destination } from "../../shared/types"
import { FormattedDate } from "../FormattedDate"
import LazyLoad from "react-lazyload"

interface PanelProps {
  destinations: Destination[]
  selectedDestination: Destination
  destinationChanged(d: Destination): void
}

export const MapPanel: FC<PanelProps> = ({
  destinations,
  selectedDestination,
  destinationChanged,
}) => {
  const itemRefs = useRef<HTMLLabelElement[]>([])

  useEffect(() => {
    if (selectedDestination) {
      const index = destinations.indexOf(selectedDestination)
      const ref = itemRefs.current[index]

      if (ref) ref.scrollIntoView({ behavior: "smooth" })
    }
  }, [selectedDestination])

  return (
    <div>
      {destinations.map((dest, index) => {
        return (
          <div key={index} onChange={() => destinationChanged(dest)}>
            <input
              type="radio"
              name="destination"
              value={dest.name}
              id={`section-${dest.id}`}
              onChange={() => {}}
              checked={dest.id === selectedDestination?.id ?? false}
            />
            <label
              htmlFor={`section-${dest.id}`}
              ref={(el) => (itemRefs.current[index] = el as HTMLLabelElement)}
            >
              {dest.name}
              <FormattedDate dateString={dest.date} />
            </label>
            <div>
              <div>
                {dest.image && (
                  <LazyLoad offset={100} overflow once>
                    <img width={310} src={dest.image} alt={dest.name} />
                  </LazyLoad>
                )}
              </div>
              <p>{dest.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
