import { FC } from "react"

interface DateProps {
  dateString: string
  className?: string
}

export const FormattedDate: FC<DateProps> = ({ dateString, className }) => {
  const date = new Date(dateString)
  const formattedDateString = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date)

  return <div className={className}>{formattedDateString}</div>
}
