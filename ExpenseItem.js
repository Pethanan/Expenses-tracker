import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import ExpensesCtx from "../Store/expenses-ctx";
import ExpenseForm from "./ExpenseForm";
import { useDispatch } from "react-redux";
import { expensesActions } from "../Store/expenses";

const ExpenseItem = (props) => {
  const dispatch = useDispatch();

  const { item } = props;

  const [editForm, setEditForm] = useState(false);

  const titleRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);

  const expensesRemoveHandler = async () => {
    await axios.delete(
      `https://expensetracker-authentication-default-rtdb.firebaseio.com/expenses/${item.name}.json`
    );
    dispatch(expensesActions.removeExpense(item));
  };

  const editExpenseSubmitHandler = async (e) => {
    e.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredAmount = amountRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDate = dateRef.current.value;
    const editedData = {
      title: enteredTitle,
      amount: +enteredAmount,
      description: enteredDescription,
      date: enteredDate,
    };
    const fetchExpensesDataResponse = await axios.put(
      `https://expensetracker-authentication-default-rtdb.firebaseio.com/expenses/${item.name}.json`,
      { editedData }
    );

    dispatch(expensesActions.editExpense({ ...editedData, name: item.name }));

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
        </Col>
        <Col>
          <Button onClick={expensesRemoveHandler}>Delete</Button>
        </Col>
      </Row>
      {editForm && (
        <Form style={{ margin: "50px 0" }} onSubmit={editExpenseSubmitHandler}>
          <label>Item Name</label>
          <input type="text" ref={titleRef} placeholder={item.title} />
          <label>Amount</label>
          <input type="number" ref={amountRef} placeholder={item.amount} />
          <label>Description</label>
          <input
            type="text"
            ref={descriptionRef}
            placeholder={item.description}
          />
          <label>Date</label>
          <input type="date" ref={dateRef} placeholder={item.date} />
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </>
  );
};

export default ExpenseItem;
