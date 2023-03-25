import React, { useRef, useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignUpModal from "../UI/SignUpModal";
import classes from "./SignupForm.js.module.css";

const SignupForm = () => {
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPwdValid, setIsPwdValid] = useState(false);
  const [isConfirmPwdValid, setIsConfirmPwdValid] = useState(false);

  const emailRef = useRef(null);
  const pwdRef = useRef(null);
  const confirmPwdRef = useRef(null);

  const authFormSubmitHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    console.log(enteredEmail);
    const enteredPwd = pwdRef.current.value;
    console.log(enteredPwd);

    const enteredConfirmPwd = confirmPwdRef.current.value;

    if (
      enteredEmail.length > 0 &&
      enteredEmail.includes("@") &&
      enteredConfirmPwd === enteredPwd &&
      enteredPwd.length > 6
    ) {
      setIsEmailValid(true);
      setIsPwdValid(true);
      setIsConfirmPwdValid(true);
      const authResponse = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAQwHgTNV3DUHtjPgoYEx5Z_n0DfzO2NXo",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPwd,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const signupAuthResponse = await authResponse.json();
      const idToken = !!signupAuthResponse.idToken;
      console.log(idToken);
      if (idToken) {
        setOpenSignUpModal(true);
        setTimeout(() => {
          setOpenSignUpModal(false);
        }, 5000);
      } else {
        console.log("Sign up Fail, try again.");
      }
    } else {
      alert("Enter all required info and valid details");
    }
  };

  const signUpModalCloseHandler = () => {
    console.log("modal closer clicked");
    setOpenSignUpModal(false);
  };

  return (
    <>
      <div className={classes.cover}>
        <div
          className={classes["signup-form-container"]}
          style={{ color: "black" }}
        >
          <h5
            style={{
              marginTop: "0 auto",
              textAlign: "center",
              marginBottom: "65px",
              fontWeight: "bolder",
            }}
          >
            Create New Account/ Signup
          </h5>
          <Form onSubmit={authFormSubmitHandler}>
            <Row className={classes["form-elements"]}>
              <Col>
                <Form.Label style={{ color: "black" }}>Email id</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="mail"
                  placeholder="email"
                  ref={emailRef}
                  required
                />
              </Col>
            </Row>
            <Row className={classes["form-elements"]}>
              <Col>
                <Form.Label style={{ color: "black" }}>
                  Create Password
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="password"
                  placeholder="password"
                  ref={pwdRef}
                  required
                />
              </Col>
            </Row>
            <Row className={classes["form-elements"]}>
              <Col>
                <Form.Label style={{ color: "black" }}>
                  Confirm Password
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="password"
                  placeholder="re-enter password"
                  required
                  ref={confirmPwdRef}
                />
              </Col>
            </Row>
            <div className={classes.btnrow}>
              <button type="submit" className={classes.submitbtn}>
                Submit
              </button>
            </div>
          </Form>
          <Link
            to="/login-page"
            style={{
              color: "black",
              width: "600px",
              display: "flex",
              justifyContent: "center",
              padding: "10px 15px",
            }}
          >
            Login here, if you already have an account
          </Link>
        </div>
      </div>
      <div>
        {openSignUpModal && (
          <SignUpModal
            signUpModalCloseHandler={signUpModalCloseHandler}
          ></SignUpModal>
        )}
      </div>
    </>
  );
};

export default SignupForm;
