import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CursorProvider from "./components/CursorContext/CursorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CursorProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CursorProvider>
);
