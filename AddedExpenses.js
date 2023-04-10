import React, { useContext, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ExpensesCtx from "../Store/expenses-ctx";
import ExpenseItem from "./ExpenseItem";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { expensesActions } from "../Store/expenses";
import { themeActions } from "../Store/theme";
import "./ExpenseForm.css";

const AddedExpenses = () => {
  const isPremiumActivated = useSelector(
    (state) => state.theme.isPremiumActivated
  );
  const items = useSelector((state) => state.expenses.items);
  const totalAmount = useSelector((state) => state.expenses.totalAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedDataResponse = await axios.get(
        "https://expensetracker-authentication-default-rtdb.firebaseio.com/expenses.json"
      );
      const fetchedData = fetchedDataResponse.data;

      console.log(fetchedData);

      let fetchedDataArray = [];
      Object.keys(fetchedData).forEach((name) => {
        const elementObject = {
          ...fetchedData[name],
          amount: +fetchedData[name].amount,
          name,
        };
        fetchedDataArray.push(elementObject);
      });
      console.log(fetchedDataArray);
      if (fetchedDataArray.length > 0)
        dispatch(expensesActions.retrieveExpenses(fetchedDataArray));
    };
    fetchData();
  }, []);
  const expenseItemsList = items.map((item) => (
    <ExpenseItem key={item.id} item={item}></ExpenseItem>
  ));

  return (
    <div className={`${isPremiumActivated ? "darktheme" : ""}`}>
      <div>
        <h3 style={{ margin: "50px 0" }}>Added Expenses</h3>
        <Row style={{ marginBottom: "50px" }}>
          <Col style={{ fontWeight: "bolder" }}>Item</Col>
          <Col style={{ fontWeight: "bolder" }}>Description</Col>
          <Col style={{ fontWeight: "bolder" }}>Amount</Col>
          <Col style={{ fontWeight: "bolder" }}>Date</Col>
          <Col style={{ fontWeight: "bolder" }}>Edit</Col>
          <Col style={{ fontWeight: "bolder" }}>Delete</Col>
        </Row>
        {expenseItemsList}
      </div>
      <h4 style={{ margin: "50px 0" }}>
        Total Spent Amount: INR. {totalAmount}
      </h4>
      {totalAmount > 10000 && (
        <Button
          onClick={() => {
            console.log("done");
            dispatch(themeActions.changeTheme());
          }}
        >
          Activate Premium
        </Button>
      )}
    </div>
  );
};

export default AddedExpenses;
