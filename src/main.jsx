import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CursorProvider from "./components/CursorContext/CursorContext.jsx";


const container = document.getElementById("root");
const root = createRoot(container); 
root.render(
  <BrowserRouter>
    <CursorProvider>
      <App />
    </CursorProvider>
  </BrowserRouter>
);
