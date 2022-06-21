import { Grid } from "@mui/material"
import { PostCard } from "../components/PostCard.js"
import { posts } from "../../blog"
import { Page } from "./templates/Page.js"

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
        </Grid>
    </Page>
)
