import { ReactNode } from "react"
import { Box, Container } from "@mui/material"
import { NavBar } from "../nav"
import defaultBackground from "../assets/background.jpg"

export type PageProps = {
    children?: ReactNode
    background?: string
}

export const Page = ({
    children,
    background = `url(${defaultBackground})`
}: PageProps) => {
    return (
        <Box
            sx={{
                background,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minHeight: "100vh"
            }}
        >
            <NavBar />
            <Container maxWidth="lg">{children}</Container>
        </Box>
    )
}
