import { expensesActions } from "./expensesSlice";
import { authActions } from "./authSlice";
import expensesReducer from "./expensesSlice";
import authReducer from "./authSlice";
import themeReducer from "./themeSlice";
import { configureStore } from "@reduxjs/toolkit";
import selectedYearReducer from "./selectedYearSlice";

const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    selectedYear: selectedYearReducer,
    auth: authReducer,
    theme: themeReducer,
  },
});

export default store;
