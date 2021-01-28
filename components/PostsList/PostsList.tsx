import { FC, useState } from "react"
import Link from "next/link"
import type { PostMetadata } from "../../shared/types"
import { FormattedDate } from "../FormattedDate"
import { Category } from "../Category"

interface PostsListProps {
  posts: PostMetadata[]
  categories: string[]
}

export const PostsList: FC<PostsListProps> = ({ posts, categories }) => {
  const [postData, setPostData] = useState<PostMetadata[]>(posts)

  const filterPosts = (category: string): PostMetadata[] => {
    return posts.filter((post) => post.category === category)
  }

  const tagClicked = (category: string) => {
    setPostData(filterPosts(category))
  }

  return (
    <div className="container flex flex-col p-8">
      <div className="flex flex-row flex-wrap content-center">
        {categories.map((category, index) => {
          return <Category onClick={tagClicked} key={index} label={category} />
        })}
      </div>
      {postData.map(({ id, title, date, description, category }) => {
        return (
          <Link key={id} href="/scribbles/[id]" as={`/scribbles/${id}`}>
            <div>
              <div>
                <h3>{title}</h3>
                <div>{description}</div>
              </div>
              <div>
                <FormattedDate dateString={date} />
                <div>{category}</div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
