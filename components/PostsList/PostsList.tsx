import { FC, useState } from "react"
import Link from "next/link"
import type { PostMetadata } from "../../shared/types"
import { FormattedDate } from "../FormattedDate"
import { Category } from "../Category"
import CancelFilter from "../../public/images/CancelFilter.svg"

interface PostsListProps {
  posts: PostMetadata[]
  categories: string[]
}

export const PostsList: FC<PostsListProps> = ({ posts, categories }) => {
  const [activeCategory, setActiveCategory] = useState<string>()
  const [postData, setPostData] = useState<PostMetadata[]>(posts)

  const filterPosts = (category: string): PostMetadata[] => {
    return posts.filter((post) => post.category === category)
  }

  const tagClicked = (category: string) => {
    setPostData(filterPosts(category))
    setActiveCategory(category)
  }

  const clearCategory = () => {
    setActiveCategory(undefined)
    setPostData(posts)
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row flex-wrap justify-center my-4">
        {categories.map((category, index) => {
          return (
            <Category
              className="mr-4"
              onClick={tagClicked}
              key={index}
              label={category}
              active={category === activeCategory}
            />
          )
        })}
        {activeCategory && (
          <CancelFilter
            onClick={clearCategory}
            className="w-8 h-8 mr-4 cursor-pointer fill-current"
          />
        )}
      </div>

      <div className="flex flex-col">
        {postData.map(({ id, title, date, description, category }) => {
          return (
            <Link key={id} href="/scribbles/[id]" as={`/scribbles/${id}`}>
              <div className="flex justify-between p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow cursor-pointer md:items-center md:flex-row transition duration-150 ease-in-out transform hover:scale-105 dark:border-dark-l dark:bg-dark-l">
                <div className="flex flex-col">
                  <h3 className="mt-0">{title}</h3>
                  <div className="text-sm">{description}</div>
                  <FormattedDate dateString={date} className="mt-2 text-sm" />
                </div>
                <div className="flex flex-row ml-2 md:mt-0 md:flex-col">
                  <Category label={category} onClick={() => {}} />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
