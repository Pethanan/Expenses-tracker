import React from "react";
import { Col, Row } from "react-bootstrap";

const ExpenseItem = (props) => {
  const { item } = props;
  return (
    <Row>
      <Col>{item.title}</Col>
      <Col>{item.description}</Col>
      <Col>{item.amount}</Col>
      <Col>{item.date}</Col>
    </Row>
  );
};

export default ExpenseItem;
