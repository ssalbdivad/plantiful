import { AppBar, Toolbar, Typography, Stack } from "@mui/material"
import { MobileNavDrawer } from "./MobileNavDrawer.js"
import { isMobile } from "../utils.js"
import * as Links from "./Links.js"

export const NavBar = () => {
    return (
        <AppBar sx={{ backgroundColor: "rgba(0,0,0,.7)" }} position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {isMobile() ? (
                    <MobileNavDrawer />
                ) : (
                    <Stack direction="row" spacing={2}>
                        <Links.HomeLink />
                        <Links.BlogLink />
                        <Links.StoryLink />
                    </Stack>
                )}

                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: "Grape Nuts"
                    }}
                >
                    Plantiful
                </Typography>
                {isMobile() ? (
                    <div></div>
                ) : (
                    <Stack direction="row" spacing={2}>
                        <Links.TwitterLink />
                        <Links.YouTubeLink />
                    </Stack>
                )}
            </Toolbar>
        </AppBar>
    )
}
