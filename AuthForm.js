import React, { useRef, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const AuthForm = () => {
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
      const idToken = await authResponse.json().idToken;

      if (idToken) {
        console.log("User has successfully signed up.");
      } else {
        console.log("Sign up Fail, try again.");
      }
    } else {
      alert("Enter all required info and valid details");
    }
  };

  return (
    <>
      <h4 style={{ marginTop: "100px" }}>Create New Account</h4>
      <Form
        style={{ width: "60%", margin: "0 auto" }}
        onSubmit={authFormSubmitHandler}
      >
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Email id
          </Form.Label>
          <Col sm="6">
            <Form.Control
              type="mail"
              placeholder="email"
              ref={emailRef}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Create Password
          </Form.Label>
          <Col sm="6">
            <Form.Control
              type="password"
              placeholder="password"
              ref={pwdRef}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Confirm Password
          </Form.Label>
          <Col sm="6">
            <Form.Control
              type="password"
              placeholder="re-enter password"
              required
              ref={confirmPwdRef}
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AuthForm;
