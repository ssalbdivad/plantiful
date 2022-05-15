import React from "react"
import { createRoot } from "react-dom/client"
import { Routes } from "./Routes"
import { BrowserRouter } from "react-router-dom"
import CssBaseline from "@mui/material/CssBaseline"
import "./styles.css"

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <CssBaseline />
            <Routes />
        </BrowserRouter>
    </React.StrictMode>
)
