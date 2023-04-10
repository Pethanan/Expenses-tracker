import React from "react";
import { Container } from "react-bootstrap";
import AddedExpenses from "../Expenses/AddedExpenses";
import ExpenseForm from "../Expenses/ExpenseForm";
import "./ExpensesPage.css";
import { useSelector } from "react-redux";

const ExpensesPage = () => {
  const isPremiumActivated = useSelector(
    (state) => state.theme.isPremiumActivated
  );

  document.body.style.backgroundColor = isPremiumActivated ? "black" : "white";
  return (
    <div style={{ width: "100%", margin: "50px 50px" }}>
      <ExpenseForm />
      <AddedExpenses />
    </div>
  );
};

export default ExpensesPage;
