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
    <div className="flex flex-col w-full">
      <div className="flex flex-row flex-wrap content-center">
        {categories.map((category, index) => {
          return <Category onClick={tagClicked} key={index} label={category} />
        })}
      </div>

      <div className="flex flex-col">
        {postData.map(({ id, title, date, description, category }) => {
          return (
            <Link key={id} href="/scribbles/[id]" as={`/scribbles/${id}`}>
              <div className="transition duration-150 ease-in-out transform hover:scale-105 p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow cursor-pointer dark:border-dark-l dark:bg-dark-l">
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
    </div>
  )
}
