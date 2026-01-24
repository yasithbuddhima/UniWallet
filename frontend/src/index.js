import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Initialize firebase
import "./utils/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
