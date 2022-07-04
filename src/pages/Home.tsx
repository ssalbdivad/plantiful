import { Grid } from "@mui/material"
import { PostCard } from "../components/PostCard.js"
import { posts } from "../../blog"
import { Page } from "./templates/Page.js"

const [latestPost, ...olderPosts] = posts

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
                <PostCard metadata={latestPost.metadata} large />
            </Grid>
            <Grid container spacing={4} sx={{ padding: 4 }}>
                {olderPosts.map(({ metadata }) => (
                    <Grid key={metadata.id} item xs={6} md={4}>
                        <PostCard metadata={metadata} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    </Page>
)
