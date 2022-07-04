import { Link } from "react-router-dom"
import { IconButton, Typography } from "@mui/material"
// import { Twitter, YouTube, Home } from "@mui/icons-material"

type NavBarTextLinkProps = {
    text: string
    route: string
}

export const NavBarTextLink = ({ text, route }: NavBarTextLinkProps) => (
    <Link to={route}>
        <Typography
            variant="h4"
            sx={{ fontFamily: "League Gothic", color: "white" }}
        >
            {text}
        </Typography>
    </Link>
)

type NavBarIconLinkProps = {
    children: JSX.Element
}

export const NavBarIconLink = ({ children }: NavBarIconLinkProps) => (
    <IconButton sx={{ color: "white" }}>{children}</IconButton>
)

// export const TwitterLink = () => (
//     <NavBarIconLink>
//         <Twitter />
//     </NavBarIconLink>
// )

// export const YouTubeLink = () => (
//     <NavBarIconLink>
//         <YouTube />
//     </NavBarIconLink>
// )

export const HomeLink = () => <NavBarTextLink text="Home" route="/" />
export const BlogLink = () => <NavBarTextLink text="Blog" route="/blog" />
export const StoryLink = () => (
    <NavBarTextLink text="Our Story" route="/story" />
)
