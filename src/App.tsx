import { Box } from "@mui/material"
import logo from "./logo.svg"
import background from "./assets/background.jpg"
import { NavBar } from "./nav"
import { Home } from "./Home.js"

export const App = () => {
    return (
        <Box>
            <NavBar />
            <Home />
        </Box>
    )
}

export default App
