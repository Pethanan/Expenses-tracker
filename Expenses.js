import React, { useContext, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ExpensesCtx from "../Store/expenses-ctx";
import ExpenseItem from "./ExpenseItem";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { expensesActions } from "../Store/expensesSlice";
import { themeActions } from "../Store/themeSlice";
import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Chart from "../Chart/Chart";

const Expenses = () => {
  const userMail = useSelector((state) => state.auth.userMail);
  const selectedYear = useSelector((state) => state.selectedYear.selectedYear);
  const userDBEndpoint = userMail.replace("@", "").replace(".", "");
  const isPremiumActivated = useSelector(
    (state) => state.theme.isPremiumActivated
  );

  const items = useSelector((state) => state.expenses.items);
  const expenseItems = items.map((item) => {
    return { ...item, date: new Date(item.date) };
  });

  const totalAmount = useSelector((state) => state.expenses.totalAmount);
  const dispatch = useDispatch();

  const filteredExpenses = expenseItems.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  console.log(expenseItems);

  console.log(filteredExpenses);
  // const expenseItemsList = expenseItems.map((item) => (
  //   <ExpenseItem key={item.name} item={item}></ExpenseItem>
  // ));
  const filteredExpenseItemsList = filteredExpenses.map((item) => (
    <ExpenseItem key={item.name} item={item}></ExpenseItem>
  ));

  useEffect(() => {
    const fetchData = async () => {
      const fetchedDataResponse = await axios.get(
        `https://expensetracker-33a48-default-rtdb.firebaseio.com/${userDBEndpoint}/expenses.json`
      );
      const fetchedData = fetchedDataResponse.data;

      console.log(fetchedData);
      console.log(fetchedData);
      console.log(fetchedData);

      let fetchedDataArray = [];
      Object.keys(fetchedData).forEach((name) => {
        const elementObject = {
          ...fetchedData[name],
          amount: +fetchedData[name].amount,
          name: name,
        };
        fetchedDataArray.push(elementObject);
      });
      console.log(fetchedDataArray);
      if (fetchedDataArray.length > 0)
        dispatch(expensesActions.retrieveExpenses(fetchedDataArray));
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter />
        <div>{filteredExpenseItemsList}</div>
      </div>
      <h4 style={{ margin: "50px 0" }}>
        Total Spent Amount: INR. {totalAmount}
      </h4>
      {totalAmount > 10000 && (
        <Button
          onClick={(e) => {
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

export default Expenses;
