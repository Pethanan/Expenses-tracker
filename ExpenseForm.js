import React, { useContext, useRef } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { expensesActions } from "../Store/expenses";
import { authActions } from "../Store/auth";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const isPremiumActivated = useSelector((s) => s.theme.isPremiumActivated);

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

    const addExpenseResponse = await axios.post(
      `${URL}/expenses.json`,
      expenseItem
    );
    console.log(addExpenseResponse.data);
    const updatedItem = {
      ...expenseItem,
      name: addExpenseResponse.data.name,
      amount: +enteredItemAmount,
    };
    console.log(updatedItem);
    dispatch(expensesActions.addExpense(updatedItem));
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3>Add Your Expense Details</h3>
      </div>

      <div
        className={`${isPremiumActivated ? "darktheme" : ""}`}
        style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}
      >
        <Form onSubmit={addExpenseHandler} style={{ width: "40%" }}>
          <Row style={{ marginBottom: "20px" }}>
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
          <Row style={{ marginBottom: "20px" }}>
            <Col>
              <Form.Label>Amount</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="0" type="number" ref={itemAmountRef} />
            </Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
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
          <Row style={{ marginBottom: "20px" }}>
            <Col>
              <Form.Label>Date</Form.Label>
            </Col>
            <Col>
              <Form.Control type="date" ref={itemDateRef} />
            </Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Button type="submit" style={{ marginTop: "30px" }}>
              Submit
            </Button>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default ExpenseForm;
