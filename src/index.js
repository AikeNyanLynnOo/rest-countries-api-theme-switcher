import React from "react";
import { createRoot } from "react-dom/client";

// import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
