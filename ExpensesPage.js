import React from "react";
import { Container } from "react-bootstrap";
import AddedExpenses from "../Expenses/AddedExpenses";
import ExpenseForm from "../Expenses/ExpenseForm";

const ExpensesPage = () => {
  return (
    <Container style={{ width: "600px", marginTop: "150px" }}>
      <ExpenseForm />
      <AddedExpenses />
    </Container>
  );
};

export default ExpensesPage;
