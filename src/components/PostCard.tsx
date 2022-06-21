import {
    CardActionArea,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Stack
} from "@mui/material"
import { Link } from "react-router-dom"
import { PostMetadata } from "../../blog/index.js"
import { Tags } from "./tags.jsx"

export type ActionAreaCardProps = {
    metadata: PostMetadata
    large?: boolean
}

export const PostCard = ({ metadata, large }: ActionAreaCardProps) => {
    return (
        <Link to={`/blog/${metadata.id}`}>
            <Card sx={{ backgroundColor: "rgba(0,0,0,.7)" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height={large ? 280 : 140}
                        image={metadata.image}
                        alt={metadata.title}
                    />
                    <CardContent>
                        <Stack spacing={1}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                sx={{ color: "white" }}
                            >
                                {metadata.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "white" }}>
                                {metadata.subtitle}
                            </Typography>
                            <Tags>{metadata.tags}</Tags>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}
