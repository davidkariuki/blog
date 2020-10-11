export interface Destination {
  id: string
  name: string
  date: string
  description?: string
  image?: string
  latitude: number
  longitude: number
}

export interface PostMetadata {
  id: string
  title: string
  date: string
  description: string
  category: string
}

export interface Post extends PostMetadata {
  contentHtml: string
}
