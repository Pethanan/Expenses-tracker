import { expensesActions } from "./expenses";
import { authActions } from "./auth";
import expensesReducer from "./expenses";
import authReducer from "./auth";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { expenses: expensesReducer, auth: authReducer },
});

export default store;
