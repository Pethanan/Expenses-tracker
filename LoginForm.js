import React, { useContext, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import AuthCtx from "../Store/auth-ctx";
import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../Store/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const pwdRef = useRef(null);

  const loginAuthSubmitHandler = async (e) => {
    e.preventDefault();
    const enteredMailId = emailRef.current.value;
    const enteredPwd = pwdRef.current.value;

    const authResponse = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDycBIyb5eyGiqEBkG_inxrLSalZxB0qLI",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredMailId,
          password: enteredPwd,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const authData = await authResponse.json();
    const isLoggedin = !!authData.idToken;

    if (isLoggedin) {
      console.log(authData.idToken);
      alert("Login succesful!");
      const loginPayload = { token: authData.idToken, userMail: enteredMailId };
      dispatch(authSliceActions.login(loginPayload));
    } else {
      alert("Login was not succesful, pls try again with valid credentials");
    }
  };

  return (
    <div style={{ margin: "0 auto", marginTop: "60px", width: "600px" }}>
      <Form onSubmit={loginAuthSubmitHandler}>
        <h3>Login Here</h3>
        <Form.Control
          style={{ marginTop: "30px" }}
          placeholder="email"
          type="mail"
          ref={emailRef}
        ></Form.Control>
        <Form.Control
          style={{ marginTop: "30px" }}
          placeholder="password"
          type="password"
          ref={pwdRef}
        ></Form.Control>
        <Button
          type="submit"
          style={{
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          Login
        </Button>
      </Form>
      <Link to="/reset-password">Forgot Password?</Link>
    </div>
  );
};

export default LoginForm;
