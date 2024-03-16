import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
