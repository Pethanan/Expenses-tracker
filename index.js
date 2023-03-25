import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { AuthCtxProvider } from "./components/Store/auth-ctx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthCtxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthCtxProvider>
  </React.StrictMode>
);
