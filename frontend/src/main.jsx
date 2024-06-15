import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { ProviderContext } from "./contexts/ProviderContext";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { LanguageProvider } from "./contexts/LanguageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <ProviderContext>
        <RouterProvider router={router} />
      </ProviderContext>
    </LanguageProvider>
  </React.StrictMode>
);
