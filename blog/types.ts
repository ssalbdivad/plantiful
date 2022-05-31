import { MDXContent } from "mdx/types"

export type Post = {
    default: MDXContent
    metadata: PostMetadata
}

export type PostMetadata = {
    title: string
    id: string
    caption: string
    subtitle: string
    image: string
    date: string
    tags: string[]
}
