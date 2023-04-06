import { expensesActions } from "./expenses";
import { authActions } from "./auth";
import expensesReducer from "./expenses";
import authReducer from "./auth";
import themeReducer from "./theme";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    auth: authReducer,
    theme: themeReducer,
  },
});

export default store;
