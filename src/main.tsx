import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import RoutesConfiguration from "./configurations/RoutesConfiguration.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Failed to find the root element");
}

createRoot(rootElement).render(
    <StrictMode>
        <BrowserRouter>
            <RoutesConfiguration />
        </BrowserRouter>
    </StrictMode>
);
