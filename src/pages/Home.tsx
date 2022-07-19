import { Grid } from "@mui/material"
import { PostCard, ImageSlideshow } from "../components/index.js"
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
                <ImageSlideshow />
            </Grid>
            <Grid container spacing={4} sx={{ padding: 4 }}>
                {posts.map(({ metadata }) => (
                    <Grid key={metadata.id} item xs={6} md={4}>
                        <PostCard metadata={metadata} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    </Page>
)
