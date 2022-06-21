import { AppBar, Toolbar, Typography, Stack } from "@mui/material"
import { MobileNavDrawer } from "./MobileNavDrawer.js"
import { isMobile } from "../utils.js"
import * as Links from "./Links.js"

const f = 5
export const NavBar = () => {
    return (
        <AppBar sx={{ backgroundColor: "rgba(0,0,0,.7)" }} position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {isMobile() ? (
                    <div style={{ width: 50 }}>
                        <MobileNavDrawer />
                    </div>
                ) : (
                    <Stack direction="row" spacing={2} width={300}>
                        <Links.HomeLink />
                        {/* <Links.BlogLink /> */}
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
                    <div style={{ width: 50 }}></div>
                ) : (
                    <Stack
                        direction="row"
                        spacing={2}
                        width={300}
                        justifyContent="right"
                    >
                        {/* <Links.TwitterLink />
                            <Links.YouTubeLink /> */}
                    </Stack>
                )}
            </Toolbar>
        </AppBar>
    )
}
