import React from "react";
import { Container } from "react-bootstrap";
import "./ExpensesPage.css";
import { useSelector } from "react-redux";
import NavHeader from "../UI/NavHeader";
import Expenses from "../Expenses/Expenses";
import NewExpenseForm from "../Expenses/NewExpenseForm";

const ExpensesPage = () => {
  const isPremiumActivated = useSelector(
    (state) => state.theme.isPremiumActivated
  );

  document.body.style.backgroundColor = isPremiumActivated ? "black" : "white";
  return (
    <>
      <NavHeader></NavHeader>
      <div style={{ width: "100%", margin: "50px 50px" }}>
        <NewExpenseForm />
        <Expenses />
      </div>
    </>
  );
};

export default ExpensesPage;
