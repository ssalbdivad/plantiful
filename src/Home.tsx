import React from "react"
import { Grid } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"
import tiramisu from "./assets/tiramisu.jpg"

export const ActionAreaCard = () => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={tiramisu}
                    alt="vegan tiramisu"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Vegan Tiramisu
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        This shit is delicious. And we totally didn't steal the
                        picture.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export const Home = () => (
    <Grid container spacing={4} sx={{ padding: 4 }}>
        <Grid item xs={12}>
            <ActionAreaCard />
        </Grid>
        <Grid item xs={4}>
            <ActionAreaCard />
        </Grid>
        <Grid item xs={4}>
            <ActionAreaCard />
        </Grid>
        <Grid item xs={4}>
            <ActionAreaCard />
        </Grid>
    </Grid>
)
