import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./components/GlobalStyle/index.css";

import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);