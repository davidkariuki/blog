import { FC, useRef, useEffect } from "react"
import { Destination } from "../../shared/types"
import { FormattedDate } from "../FormattedDate"
import Image from "next/image"

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
    <div className="bg-gray-200 dark:bg-dark-l w-full md:w-1/4 h-1/2 md:h-(screen-96) overflow-y-scroll">
      {destinations.map((dest, index) => {
        const checked = dest.id === selectedDestination?.id
        return (
          <div key={index} onChange={() => destinationChanged(dest)}>
            <input
              type="radio"
              name="destination"
              value={dest.name}
              id={`section-${dest.id}`}
              onChange={() => {}}
              checked={checked ?? false}
              className="hidden"
            />
            <label
              className="relative block p-4 text-base text-yellow-700 cursor-pointer hover:bg-gray-400 dark:text-yellow-600 dark:hover:bg-dark"
              htmlFor={`section-${dest.id}`}
              ref={(el) => (itemRefs.current[index] = el as HTMLLabelElement)}
            >
              {dest.name}
              <FormattedDate
                className="text-dark dark:text-gray-300"
                dateString={dest.date}
              />
              <svg
                className={`fill-current absolute right-4 top-8 ${
                  checked ? "transform -translate-y-1/2 rotate-180" : ""
                }`}
                width="16"
                height="8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="0,0 16,0 8,8" />
              </svg>
            </label>
            <div
              className={`bg-gray-300 dark:bg-dark ${checked ? "" : "hidden"}`}
            >
              <div className="text-center">
                {dest.image && (
                  <Image
                    width={310}
                    height={155}
                    src={dest.image}
                    alt={dest.name}
                  />
                )}
              </div>
              <p className="p-4 text-sm">{dest.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
