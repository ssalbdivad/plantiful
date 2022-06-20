import * as alfredo from "./alfredo/post.mdx"
import * as cake from "./cake/post.mdx"
import * as scones from "./scones/post.mdx"
import { Post } from "./types.js"
export * from "./types.js"

export const posts = [alfredo, cake, scones] as Post[]

posts.forEach(
    (post) =>
        (post.metadata.id = post.metadata.title.toLowerCase().replace(" ", "-"))
)

posts.sort(
    (postOne, postTwo) =>
        new Date(postOne.metadata.date).getTime() -
        new Date(postTwo.metadata.date).getTime()
) as Post[]
