import * as scones from "./scones/post.mdx"
import * as bananaBread from "./bananaBread/post.mdx"
import * as simpleFrenchToast from "./simpleFrenchToast/post.mdx"

import { Post } from "./types.js"
export * from "./types.js"

export const posts = [scones, bananaBread, simpleFrenchToast] as Post[]

posts.forEach(
    (post) =>
        (post.metadata.id = post.metadata.title.toLowerCase().replace(" ", "-"))
)

posts.sort(
    (postOne, postTwo) =>
        new Date(postTwo.metadata.date).getTime() -
        new Date(postOne.metadata.date).getTime()
) as Post[]
