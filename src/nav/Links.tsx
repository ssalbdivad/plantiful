import React from "react"
import { IconButton, Typography } from "@mui/material"
import { Twitter, YouTube, Home } from "@mui/icons-material"

type NavBarTextLinkProps = {
    text: string
}

export const NavBarTextLink = ({ text }: NavBarTextLinkProps) => (
    <Typography
        variant="h4"
        sx={{ fontFamily: "League Gothic", color: "white" }}
    >
        {text}
    </Typography>
)

type NavBarIconLinkProps = {
    children: JSX.Element
}

export const NavBarIconLink = ({ children }: NavBarIconLinkProps) => (
    <IconButton sx={{ color: "white" }}>{children}</IconButton>
)

export const TwitterLink = () => (
    <NavBarIconLink>
        <Twitter />
    </NavBarIconLink>
)

export const YouTubeLink = () => (
    <NavBarIconLink>
        <YouTube />
    </NavBarIconLink>
)

export const HomeLink = () => <NavBarTextLink text="Home" />
export const BlogLink = () => <NavBarTextLink text="Blog" />
export const AboutLink = () => <NavBarTextLink text="About" />
