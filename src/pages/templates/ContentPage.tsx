import { Card, Container } from "@mui/material"
import { ReactNode } from "react"
import { Page } from "./Page.js"

export type ContentPageProps = {
    background?: string
    children: ReactNode
}

export const ContentPage = ({ children, background }: ContentPageProps) => {
    return (
        <Page {...(background ? { background } : undefined)}>
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
