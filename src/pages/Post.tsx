import { Box, Grid, Stack, Typography } from "@mui/material"
import { useParams, Navigate } from "react-router-dom"
import { posts } from "../../blog"
import { Tags } from "../components/tags.js"
import { ContentPage } from "./templates/ContentPage.js"

export const Post = () => {
    const { postId } = useParams()
    const RequestedPost = posts.find((post) => post.metadata.id === postId)
    return RequestedPost ? (
        <ContentPage>
            <Box sx={{ marginBottom: "2em" }}>
                <Typography variant="h1" fontSize="2.5em">
                    {RequestedPost.metadata.title}
                </Typography>
                <Typography variant="h2" color="GrayText" fontSize="1.4em">
                    {RequestedPost.metadata.subtitle}
                </Typography>
                <Tags>{RequestedPost.metadata.tags}</Tags>
                <img
                    src={RequestedPost.metadata.image}
                    style={{
                        paddingTop: "1em",
                        maxHeight: "394px",
                        width: "100%",
                        objectFit: "cover",
                        marginBottom: "-.5em"
                    }}
                />
                <Typography variant="caption" fontSize=".9em">
                    {RequestedPost.metadata.caption}
                </Typography>
            </Box>
            <RequestedPost.default />
        </ContentPage>
    ) : (
        <Navigate to="/" />
    )
}
