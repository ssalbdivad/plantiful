import { Grid } from "@mui/material"
import { PostCard } from "../PostCard.jsx"
import { posts } from "../../blog"
import { Page } from "./Page.jsx"

export const Home = () => (
    <Page>
        <Grid
            container
            spacing={4}
            sx={{
                padding: 4
            }}
        >
            <Grid item xs={12}>
                <PostCard metadata={posts[0].metadata} large />
            </Grid>
            <Grid item xs={6} md={4}>
                <PostCard metadata={posts[1].metadata} />
            </Grid>
            <Grid item xs={6} md={4}>
                <PostCard metadata={posts[1].metadata} />
            </Grid>
            <Grid item xs={6} md={4}>
                <PostCard metadata={posts[1].metadata} />
            </Grid>
        </Grid>
    </Page>
)
