import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import RoutesConfiguration from "@/configurations/RoutesConfiguration";
import Header from "@/layout/Header";
import "./styles.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Failed to find the root element");
}

createRoot(rootElement).render(
    <StrictMode>
        <BrowserRouter>
            <Header>
                <main>
                    <RoutesConfiguration />
                </main>
            </Header>
        </BrowserRouter>
    </StrictMode>
);
