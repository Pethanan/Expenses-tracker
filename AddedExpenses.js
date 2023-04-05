import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ExpensesCtx from "../Store/expenses-ctx";
import ExpenseItem from "./ExpenseItem";
import { useSelector } from "react-redux";

const AddedExpenses = () => {
  const items = useSelector((state) => state.expenses.items);

  const expenseItemsList = items.map((item) => (
    <ExpenseItem key={item.id} item={item}></ExpenseItem>
  ));

  return (
    <>
      <Container>
        <h3>Added Expenses</h3>
        <Row>
          <Col>Item</Col>
          <Col>Description</Col>
          <Col>Amount</Col>
          <Col>Date</Col>
        </Row>
        {expenseItemsList}
      </Container>
    </>
  );
};

export default AddedExpenses;
