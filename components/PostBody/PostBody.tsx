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
    <>
      <h3>{frontMatter.title}</h3>
      <FormattedDate className="text-center" dateString={frontMatter.date} />
      <div>{children}</div>
      <Comments />
    </>
  )
}
