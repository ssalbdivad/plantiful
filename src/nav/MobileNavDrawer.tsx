import * as React from "react"
import { IconButton, Box, Drawer, Stack } from "@mui/material"
import { Menu } from "@mui/icons-material"
import * as Links from "./Links.js"

export const MobileNavDrawer = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const list = () => (
        <Box
            sx={{
                width: 250
            }}
        >
            <Stack spacing={2}>
                <Links.HomeLink />
                <Links.BlogLink />
                <Links.StoryLink />
                <Stack spacing={2} direction="row">
                    <Links.TwitterLink />
                    <Links.YouTubeLink />
                </Stack>
            </Stack>
        </Box>
    )

    return (
        <div>
            <React.Fragment>
                <IconButton
                    sx={{ color: "white" }}
                    onClick={() => setIsOpen(true)}
                >
                    <Menu />
                </IconButton>
                <Drawer
                    anchor="left"
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    PaperProps={{ sx: { backgroundColor: "rgba(0,0,0,.7)" } }}
                >
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    )
}
