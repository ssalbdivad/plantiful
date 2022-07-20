import Carousel from "react-material-ui-carousel"
import { photos } from "../../blog/index.js"

export const ImageSlideshow = () => {
    return (
        <div style={{ marginLeft: -32 }}>
            <Carousel>
                {photos.map((photo, i) => (
                    <div
                        key={i}
                        style={{
                            height: 400,
                            background: `url(${photo})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }}
                    />
                ))}
            </Carousel>
        </div>
    )
}
