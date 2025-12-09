import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/space-mono";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
