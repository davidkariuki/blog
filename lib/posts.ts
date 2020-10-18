import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { PostMetadata } from "../shared/types"

const postsDirectory = path.join(process.cwd(), "pages/scribbles")

// get metadata for all posts
export const getSortedPostsData = (): PostMetadata[] => {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "")
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
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)

    if (dateA < dateB) {
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
        id: filename.replace(/\.mdx$/, ""),
      },
    }
  })
}
