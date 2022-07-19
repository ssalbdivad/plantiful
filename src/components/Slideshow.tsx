import Carousel from "react-material-ui-carousel"
import { Paper, Button, Box } from "@mui/material"
import { photos } from "../../blog/index.js"

export const ImageSlideshow = () => {
    return (
        <Box style={{ height: 400 }}>
            <Carousel>
                {photos.map((photo, i) => (
                    <img key={i} style={{ height: 400 }} src={photo} />
                ))}
            </Carousel>
        </Box>
    )
}
