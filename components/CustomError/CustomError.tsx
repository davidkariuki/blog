import { FC } from "react"

interface CustomErrorProps {
  code: number
  message: string
}

export const CustomError: FC<CustomErrorProps> = ({ code, message }) => {
  return (
    <>
      <div className="container">
        <div className="mr-4 pr-4 border-r border-gray-200">{code}</div>
        <div>{message}</div>
      </div>
    </>
  )
}
