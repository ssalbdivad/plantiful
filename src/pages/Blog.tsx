import { Grid } from "@mui/material"
import { PostCard } from "../PostCard.jsx"
import { posts } from "../../blog"
import { Link } from "react-router-dom"
import { Page } from "./Page.jsx"

export const Blog = () => (
    <Page>
        <Grid container spacing={4} sx={{ padding: 4 }}>
            {posts.map(({ metadata }) => (
                <Grid key={metadata.id} item xs={6} md={4}>
                    <Link to={`/blog/${metadata.id}`}>
                        <PostCard metadata={metadata} />
                    </Link>
                </Grid>
            ))}
        </Grid>
    </Page>
)
