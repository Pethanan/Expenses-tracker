import React, { useReducer, useState } from "react";

const ExpensesCtx = React.createContext({
  expenseItems: [],
  totalAmount: 0,
  addExpense: (expense) => {},
});

const defaultCartState = { expenseItems: [], totalAmount: 0 };

const expenseReducer = (state, action) => {
  if (action.type === "ADD_EXPENSE") {
    const updatedItems = [...state.expenseItems, action.item];
    const updatedTotalAmount = state.totalAmount + action.item.amount;

    return { expenseItems: updatedItems, totalAmount: updatedTotalAmount };
  }
};

export const ExpensesCtxProvider = (props) => {
  const [expensesState, dispatchExpenseAction] = useReducer(
    expenseReducer,
    defaultCartState
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
