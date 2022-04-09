import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { Stack } from "@mui/material"

export const NavBar = () => {
    return (
        <AppBar sx={{ backgroundColor: "rgba(0,0,0,.7)" }} position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Stack direction="row" spacing={2}>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            fontFamily: "Grape Nuts"
                        }}
                    >
                        Home
                    </Typography>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            fontFamily: "Grape Nuts"
                        }}
                    >
                        Blog
                    </Typography>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            fontFamily: "Grape Nuts"
                        }}
                    >
                        About
                    </Typography>
                </Stack>
                <Typography
                    variant="h3"
                    component="div"
                    sx={{
                        fontFamily: "Grape Nuts"
                    }}
                >
                    Plantiful
                </Typography>
                <Typography
                    variant="h3"
                    component="div"
                    sx={{
                        fontFamily: "Grape Nuts"
                    }}
                >
                    On Social
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
