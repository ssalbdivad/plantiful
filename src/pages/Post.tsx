import { useParams, Navigate } from "react-router-dom"
import { posts } from "../../blog"
import { Page } from "./Page.jsx"

export const Post = () => {
    const { postId } = useParams()
    const RequestedPost = posts.find(
        (post) => post.metadata.id === postId
    )?.default
    return RequestedPost ? (
        <Page background="white">
            <RequestedPost />
        </Page>
    ) : (
        <Navigate to="/" />
    )
}
