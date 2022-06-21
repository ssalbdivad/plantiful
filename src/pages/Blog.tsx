import { Grid } from "@mui/material"
import { PostCard } from "../components/PostCard.js"
import { posts } from "../../blog"
import { Page } from "./templates/Page.js"

export const Blog = () => (
    <Page>
        <Grid container spacing={4} sx={{ padding: 4 }}>
            {posts.map(({ metadata }) => (
                <Grid key={metadata.id} item xs={6} md={4}>
                    <PostCard metadata={metadata} />
                </Grid>
            ))}
        </Grid>
    </Page>
)
