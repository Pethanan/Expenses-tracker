import React, { useContext, useRef } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import ExpensesCtx from "../Store/expenses-ctx";
import axios from "axios";

const ExpenseForm = () => {
  const expensesCtx = useContext(ExpensesCtx);

  const itemTitleRef = useRef(null);
  const itemAmountRef = useRef(null);
  const itemDescriptionRef = useRef(null);
  const itemDateRef = useRef(null);

  const URL =
    "https://expensetracker-authentication-default-rtdb.firebaseio.com/";

  const addExpenseHandler = async (e) => {
    e.preventDefault();
    const enteredItemTitle = itemTitleRef.current.value;
    const enteredItemAmount = itemAmountRef.current.value;
    const enteredItemDescription = itemDescriptionRef.current.value;
    const enteredItemDate = itemDateRef.current.value;

    const expenseItem = {
      title: enteredItemTitle,
      amount: enteredItemAmount,
      description: enteredItemDescription,
      date: enteredItemDate,
    };

    expensesCtx.addExpense(expenseItem);
    const addExpenseResponse = await axios.post(
      `${URL}/expenses.json`,
      expenseItem
    );
    console.log(addExpenseResponse.data);
  };
  return (
    <Form onSubmit={addExpenseHandler}>
      <Row>
        <Col>
          <Form.Label>Item Name</Form.Label>
        </Col>
        <Col>
          <Form.Control
            placeholder="item name"
            type="text"
            ref={itemTitleRef}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Amount</Form.Label>
        </Col>
        <Col>
          <Form.Control placeholder="0" type="number" ref={itemAmountRef} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Description</Form.Label>
        </Col>
        <Col>
          <Form.Control
            placeholder="description"
            type="text"
            ref={itemDescriptionRef}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Date</Form.Label>
        </Col>
        <Col>
          <Form.Control type="date" ref={itemDateRef} />
        </Col>
      </Row>
      <Row>
        <Button type="submit">Submit</Button>
      </Row>
    </Form>
  );
};

export default ExpenseForm;
