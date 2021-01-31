import dynamic from "next/dynamic"
import { FC } from "react"

interface TagProps {
  active?: boolean
  label: string
  onClick(label: string): void
  className?: string
}

export const Category: FC<TagProps> = ({
  active,
  label,
  onClick,
  className,
}) => {
  const SVG: any = dynamic(() => import(`../../public/images/${label}.svg`))

  return (
    <>
      <div onClick={() => onClick(label)}>
        <SVG
          className={`${className} cursor-pointer w-8 h-8 fill-current ${
            active ? "text-yellow-600" : "text-dark dark:text-gray-50"
          } hover:text-yellow-600 dark:hover:text-yellow-600`}
        />
      </div>
    </>
  )
}
