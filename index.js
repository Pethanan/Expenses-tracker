import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthCtxProvider } from "./components/Store/auth-ctx";
import { ExpensesCtxProvider } from "./components/Store/expenses-ctx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ExpensesCtxProvider>
      <AuthCtxProvider>
        <App />
      </AuthCtxProvider>
    </ExpensesCtxProvider>
  </React.StrictMode>
);
