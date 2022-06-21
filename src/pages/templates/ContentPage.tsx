import { Card, Container } from "@mui/material"
import { ReactNode } from "react"
import { isMobile } from "../../utils.js"
import { Page } from "./Page.js"

export type ContentPageProps = {
    children: ReactNode
}

const GREEN_BACKGROUND_GRADIENT =
    "linear-gradient(135deg, rgb(150, 200, 120) 0%, rgb(255, 255, 255) 100%)"

export const ContentPage = ({ children }: ContentPageProps) => {
    return (
        <Page background={isMobile() ? "white" : GREEN_BACKGROUND_GRADIENT}>
            {isMobile() ? (
                children
            ) : (
                <Container maxWidth="md" sx={{ paddingY: "1em" }}>
                    <Card
                        elevation={24}
                        sx={{
                            paddingY: "1em",
                            paddingX: isMobile() ? ".5em" : "2em"
                        }}
                    >
                        {children}
                    </Card>
                </Container>
            )}
        </Page>
    )
}
