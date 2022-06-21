import { Card, Container } from "@mui/material"
import { ReactNode } from "react"
import { Page } from "./Page.js"

export type ContentPageProps = {
    children: ReactNode
}

export const ContentPage = ({ children }: ContentPageProps) => {
    return (
        <Page background="linear-gradient(135deg, rgb(150, 200, 120) 0%, rgb(255, 255, 255) 100%)">
            <Container maxWidth="md" sx={{ paddingY: "1em" }}>
                <Card
                    elevation={24}
                    sx={{
                        paddingY: "1em",
                        paddingX: "2em"
                    }}
                >
                    {children}
                </Card>
            </Container>
        </Page>
    )
}
