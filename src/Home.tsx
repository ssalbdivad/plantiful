import React from "react"
import { Grid } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"
import tiramisu from "./assets/tiramisu.jpg"

export type ActionAreaCardProps = {
    featured?: boolean
}

export const ActionAreaCard = ({ featured }: ActionAreaCardProps) => {
    return (
        <Card sx={{ backgroundColor: "rgba(0,0,0,.7)" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={featured ? 280 : 140}
                    image={tiramisu}
                    alt="vegan tiramisu"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        sx={{ color: "white" }}
                    >
                        Vegan Tiramisu
                    </Typography>
                    <Typography variant="body2" sx={{ color: "white" }}>
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
            <ActionAreaCard featured />
        </Grid>
        <Grid item xs={6} md={4}>
            <ActionAreaCard />
        </Grid>
        <Grid item xs={6} md={4}>
            <ActionAreaCard />
        </Grid>
        <Grid item xs={6} md={4}>
            <ActionAreaCard />
        </Grid>
    </Grid>
)
