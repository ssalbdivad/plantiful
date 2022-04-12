import { Box } from "@mui/material"
import logo from "./logo.svg"
import background from "./assets/background.jpg"
import { NavBar } from "./nav"
import { Home } from "./Home.js"

export const App = () => {
    return (
        <Box
            sx={{
                background: `url(${background}) no-repeat center fixed`,
                backgroundSize: "cover",
                height: "100%",
                width: "100%"
            }}
        >
            <NavBar />
            <Home />
        </Box>
    )
}

export default App
