import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import CssBaseline from "@mui/material/CssBaseline"
import "./styles.css"

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <CssBaseline />
        <App />
    </React.StrictMode>
)
