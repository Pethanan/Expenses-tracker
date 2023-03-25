import React from "react";
import classes from "./SignUpModal.module.css";
import ReactDOM from "react-dom";
import { Container, Button } from "react-bootstrap";

export const BackDrop = (props) => {
  return (
    <div onClick={props.signUpCloseHandler} className={classes.backdrop}></div>
  );
};

const SignUpModalOverlay = (props) => {
  return (
    <Container className={classes.modal}>
      <h4>Succss</h4>
      <p>You completed sing up successfully!</p>
      <Button onClick={props.signUpModalCloseHandler}>Close</Button>
    </Container>
  );
};

const modalElement = document.getElementById("signup-overlay");
const SignUpModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <SignUpModalOverlay
          signUpModalCloseHandler={props.signUpModalCloseHandler}
        >
          {props.children}
        </SignUpModalOverlay>,
        modalElement
      )}
      {ReactDOM.createPortal(
        <BackDrop
          signUpModalCloseHandler={props.signUpModalCloseHandler}
        ></BackDrop>,
        modalElement
      )}
    </React.Fragment>
  );
};

export default SignUpModal;
