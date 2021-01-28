import { FC } from "react"

interface TagProps {
  label: string
  onClick(label: string): void
}

export const Category: FC<TagProps> = ({ label, onClick }) => {
  return (
    <>
      <div onClick={() => onClick(label)}>{label}</div>
    </>
  )
}
