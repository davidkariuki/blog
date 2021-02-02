import { FC } from "react"
import { FormattedDate } from "../FormattedDate"
import { Comments } from "../Comments"

interface PostProps {
  frontMatter: {
    id: string
    title: string
    date: string
  }
}

export const PostBody: FC<PostProps> = ({ children, frontMatter }) => {
  return (
    <div className="container">
      <h3 className="text-center">{frontMatter.title}</h3>
      <FormattedDate
        text-sm
        className="text-center text-base mb-4"
        dateString={frontMatter.date}
      />
      {children}
      <Comments />
    </div>
  )
}
