import { Box } from "@mui/material"
import logo from "./logo.svg"
import background from "./assets/background.jpg"
import { NavBar } from "./NavBar.js"

export const App = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${background})`,
                backgroundSize: "100%",
                height: "100vh",
                width: "100vw"
            }}
        >
            <NavBar />
        </Box>
    )
}

export default App
