import React, { FunctionComponent } from "react"
import Link from "next/link"
import { Content, Card, CardContent, PostTitle } from "./styles"
import type { PostMetadata } from "../../shared/types"
import { FormattedDate } from "../FormattedDate"

interface PostsListProps {
  posts: PostMetadata[]
}

export const PostsList: FunctionComponent<PostsListProps> = ({ posts }) => {
  return (
    <Content>
      {posts.map(({ id, title, date }) => {
        return (
          <Link key={id} href="/scribbles/[id]" as={`/scribbles/${id}`}>
            <Card>
              <CardContent>
                <PostTitle>{title}</PostTitle>
                <FormattedDate dateString={date} />
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </Content>
  )
}
