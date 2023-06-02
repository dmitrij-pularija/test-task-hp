import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
   {/* <GlobalStyle />  */}
    <App />
  </StrictMode>
);