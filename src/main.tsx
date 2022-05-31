import React from "react"
import { createRoot } from "react-dom/client"
import { createTheme } from "@mui/material/styles"
import { Routes } from "./Routes"
import { BrowserRouter } from "react-router-dom"
import CssBaseline from "@mui/material/CssBaseline"
import "./styles.css"
import { ThemeProvider } from "@emotion/react"

const theme = createTheme({
    typography: {
        fontFamily: "Poppins"
    }
})

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <CssBaseline />
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
)
