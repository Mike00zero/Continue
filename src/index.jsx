import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { GameProvider } from "./store/GameStore";

createRoot(document.getElementById("root")).render(
    <GameProvider>
        <App />
    </GameProvider>
);