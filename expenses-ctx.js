import React, { useReducer, useEffect } from "react";
import axios from "axios";

const ExpensesCtx = React.createContext({
  expenseItems: [],
  totalAmount: 0,
  addExpense: (expense) => {},
});

const defaultExpensesState = { expenseItems: [], totalAmount: 0 };

const expenseReducer = (state, action) => {
  if (action.type === "ADD_EXPENSE") {
    const updatedItems = [...state.expenseItems, action.item];
    const updatedTotalAmount = state.totalAmount + action.item.amount;

    return { expenseItems: updatedItems, totalAmount: updatedTotalAmount };
  }
};

export const ExpensesCtxProvider = (props) => {
  const URL =
    "https://expensetracker-authentication-default-rtdb.firebaseio.com/";

  // useEffect(() => {
  //   const fetchExpenses = async () => {
  //     const fetchExpensesDataResponse = await axios.get(`${URL}/expenses.json`);
  //     const fetchedExpensesData = fetchExpensesDataResponse.data;
  //     dispatchExpenseAction({
  //       type: "FETCHING_EXPENSES",
  //       items: fetchedExpensesData,
  //     });
  //   };
  //   fetchExpenses();
  // }, []);

  const [expensesState, dispatchExpenseAction] = useReducer(
    expenseReducer,
    defaultExpensesState
  );

  const addExpenseHandler = (expense) => {
    console.log(expense);
    dispatchExpenseAction({ type: "ADD_EXPENSE", item: expense });
  };

  const expensesCtxExpensesCtxValue = {
    expenseItems: expensesState.expenseItems,
    totalAmount: expensesState.totalAmount,
    addExpense: addExpenseHandler,
  };
  return (
    <ExpensesCtx.Provider value={expensesCtxExpensesCtxValue}>
      {props.children}
    </ExpensesCtx.Provider>
  );
};

export default ExpensesCtx;
