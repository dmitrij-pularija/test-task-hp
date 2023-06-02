import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import "./components/GlobalStyle/fonts.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>
);