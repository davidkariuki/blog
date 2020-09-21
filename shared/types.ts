export interface Destination {
  name: string
  date?: string
  image?: string
  latitude: number
  longitude: number
}

export interface PostMetadata {
  id: string
  title: string
  date: string
}

export interface Post extends PostMetadata {
  contentHtml: string
  categories: string[]
}
