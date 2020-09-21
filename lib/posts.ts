import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { Post, PostMetadata } from "../shared/types"

const postsDirectory = path.join(process.cwd(), "posts")

export const getSortedPostsData = (): PostMetadata[] => {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "")
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data,
    } as PostMetadata
  })

  // return posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

interface PostIds {
  params: { id: string }
}

export const getAllPostIds = (): PostIds[] => {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((filename) => {
    return {
      params: {
        id: filename.replace(/\.md$/, ""),
      },
    }
  })
}

export const getPostData = async (id: string): Promise<Post> => {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const matterResult = matter(fileContents)
  const contentHtml = matterResult.content

  return {
    id,
    contentHtml,
    ...matterResult.data,
  } as Post
}