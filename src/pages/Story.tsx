import { Page } from "./templates/Page.js"
import { Card, Container } from "@mui/material"
import { isMobile } from "../utils.js"
import StoryContent from "../../story.mdx"

export const Story = () => (
    <Page>
        <Container maxWidth="md" sx={{ paddingY: "1em" }}>
            <Card
                elevation={24}
                sx={{
                    paddingY: "1em",
                    paddingX: isMobile() ? ".5em" : "2em"
                }}
            >
                <StoryContent />
            </Card>
        </Container>
    </Page>
)
