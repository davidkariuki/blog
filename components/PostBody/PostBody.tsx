import React, { FunctionComponent } from "react"
import { PostTitle } from "./styles"
import { Article } from "../../styles/shared"
import { FormattedDate } from "../FormattedDate"
import { Comments } from "../Comments"

interface PostProps {
  frontMatter: {
    id: string
    title: string
    date: string
  }
}

export const PostBody: FunctionComponent<PostProps> = ({
  children,
  frontMatter,
}) => {
  return (
    <>
      <PostTitle>{frontMatter.title}</PostTitle>
      <FormattedDate textCenter={true} dateString={frontMatter.date} />
      <Article>{children}</Article>
      <Comments />
    </>
  )
}
