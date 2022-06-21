import { Box, Stack, Typography } from "@mui/material"
import { useParams, Navigate } from "react-router-dom"
import { posts } from "../../blog"
import { Tags } from "../components/tags.js"
import { ContentPage } from "./templates/ContentPage.js"

export const Post = () => {
    const { postId } = useParams()
    const RequestedPost = posts.find((post) => post.metadata.id === postId)
    return RequestedPost ? (
        <ContentPage background="linear-gradient(135deg, rgb(150, 200, 120) 0%, rgb(255, 255, 255) 100%)">
            <Box sx={{ marginBottom: "1em" }}>
                <Typography variant="h1" fontSize="2.5em">
                    {RequestedPost.metadata.title}
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h2" color="GrayText" fontSize="1.4em">
                        {RequestedPost.metadata.subtitle}
                    </Typography>
                    <Tags>{RequestedPost.metadata.tags}</Tags>
                </Stack>
                <img
                    src={RequestedPost.metadata.image}
                    style={{
                        paddingTop: "1em",
                        maxHeight: "20em",
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
