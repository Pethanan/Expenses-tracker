import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import ExpensesCtx from "../Store/expenses-ctx";
import ExpenseForm from "./ExpenseForm";

const ExpenseItem = (props) => {
  const { item } = props;

  const [editForm, setEditForm] = useState(false);
  const expensesCtx = useContext(ExpensesCtx);

  const titleRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);

  const expensesRemoveHandler = () => {
    expensesCtx.removeExpense(item);
  };

  const editExpenseSubmitHandler = async (e) => {
    e.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredAmount = amountRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDate = dateRef.current.value;

    const editedExpenseItem = {
      name: item.name,
      title: enteredTitle,
      amount: enteredAmount,
      description: enteredDescription,
      date: enteredDate,
    };

    expensesCtx.editExpense(editedExpenseItem);
    setEditForm(false);
  };

  return (
    <>
      <Row>
        <Col>{item.title}</Col>
        <Col>{item.description}</Col>
        <Col>{item.amount}</Col>
        <Col>{item.date}</Col>
        <Col>
          <Button
            onClick={() => {
              setEditForm(true);
            }}
          >
            Edit
          </Button>
          <Button onClick={expensesRemoveHandler}>Delete</Button>
        </Col>
      </Row>
      {editForm && (
        <Form onSubmit={editExpenseSubmitHandler}>
          <Form.Label>Item Name</Form.Label>
          <Form.Control type="text" ref={titleRef} placeholder={item.title} />
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            ref={amountRef}
            placeholder={item.price}
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            ref={descriptionRef}
            placeholder={item.amount}
          />
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" ref={dateRef} placeholder={item.date} />
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </>
  );
};

export default ExpenseItem;
