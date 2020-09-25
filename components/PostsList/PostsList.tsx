import React, { FunctionComponent, useState } from "react"
import Link from "next/link"
import type { PostMetadata } from "../../shared/types"
import { FormattedDate } from "../FormattedDate"
import { Category } from "../Category"
import { Tag } from "../Category/styles"
import {
  Content,
  Card,
  CardContent,
  DateTag,
  Description,
  PostTitle,
  TagsList,
} from "./styles"

interface PostsListProps {
  posts: PostMetadata[]
  categories: string[]
}

export const PostsList: FunctionComponent<PostsListProps> = ({
  posts,
  categories,
}) => {
  const [postData, setPostData] = useState<PostMetadata[]>(posts)

  const filterPosts = (category: string): PostMetadata[] => {
    return posts.filter((post) => post.category === category)
  }

  const tagClicked = (category: string) => {
    setPostData(filterPosts(category))
  }

  return (
    <Content>
      <TagsList>
        {categories.map((category, index) => {
          return (
            <Category
              onClicked={tagClicked}
              dark={true}
              key={index}
              label={category}
            />
          )
        })}
      </TagsList>
      {postData.map(({ id, title, date, description, category }) => {
        return (
          <Link key={id} href="/scribbles/[id]" as={`/scribbles/${id}`}>
            <Card>
              <CardContent>
                <PostTitle>{title}</PostTitle>
                <Description>{description}</Description>
              </CardContent>
              <DateTag>
                <FormattedDate dateString={date} />
                <Tag>{category}</Tag>
              </DateTag>
            </Card>
          </Link>
        )
      })}
    </Content>
  )
}
