import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";   // <- must be present and point to file with @tailwind lines

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
