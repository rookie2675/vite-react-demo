import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import RoutesConfiguration from "./configurations/RoutesConfiguration.tsx";
import Header from "./layout/Header.tsx";
import "./styles.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Failed to find the root element");
}

createRoot(rootElement).render(
    <StrictMode>
        <BrowserRouter>
            <Header>
                <RoutesConfiguration />
            </Header>
        </BrowserRouter>
    </StrictMode>
);
