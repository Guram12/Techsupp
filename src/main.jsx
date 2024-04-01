import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CursorProvider from "./components/CursorContext/CursorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CursorProvider>
      <App />
    </CursorProvider>
  </BrowserRouter>
);
