import { MDXContent } from "mdx/types"
import * as alfredo from "./alfredo/post.mdx"
import * as cake from "./cake/post.mdx"

export const posts = [alfredo, cake] as Post[]

posts.forEach(
    (post) =>
        (post.metadata.id = post.metadata.title.toLowerCase().replace(" ", "-"))
)

posts.sort(
    (postOne, postTwo) =>
        new Date(postOne.metadata.date).getTime() -
        new Date(postTwo.metadata.date).getTime()
) as Post[]

export type Post = {
    default: MDXContent
    metadata: PostMetadata
}

export type PostMetadata = {
    title: string
    id: string
    caption: string
    image: string
    date: string
    tags: string[]
}
