import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { Stack, IconButton } from "@mui/material"
import { Twitter, YouTube, Home } from "@mui/icons-material"

type NavBarTextLinkProps = {
    text: string
}

const NavBarTextLink = ({ text }: NavBarTextLinkProps) => (
    <Typography variant="h4" sx={{ fontFamily: "League Gothic" }}>
        {text}
    </Typography>
)

type NavBarIconLinkProps = {
    children: JSX.Element
}

const NavBarIconLink = ({ children }: NavBarIconLinkProps) => (
    <IconButton sx={{ color: "white" }}>{children}</IconButton>
)

export const NavBar = () => {
    return (
        <AppBar sx={{ backgroundColor: "rgba(0,0,0,.7)" }} position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Stack direction="row" spacing={2}>
                    <NavBarTextLink text="Home" />
                    <NavBarTextLink text="Blog" />
                    <NavBarTextLink text="About" />
                </Stack>
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: "Grape Nuts"
                    }}
                >
                    Plantiful
                </Typography>
                <Stack direction="row" spacing={2}>
                    <NavBarIconLink>
                        <Twitter />
                    </NavBarIconLink>
                    <NavBarIconLink>
                        <YouTube />
                    </NavBarIconLink>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
