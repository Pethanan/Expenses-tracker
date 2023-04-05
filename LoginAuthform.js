import React, { useContext, useRef, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import AuthCtx from "../Store/auth-ctx";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/auth";

const LoginAuthform = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const emailRef = useRef(null);
  const pwdRef = useRef(null);

  const loginAuthSubmitHandler = async (e) => {
    e.preventDefault();
    const enteredMailId = emailRef.current.value;
    const enteredPwd = pwdRef.current.value;

    const authResponse = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQwHgTNV3DUHtjPgoYEx5Z_n0DfzO2NXo",
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
      alert("Login uccesful!");
      dispatch(authActions.login(authData.idToken));
    }
  };

  return (
    <div style={{ margin: "0 auto", marginTop: "60px", width: "600px" }}>
      <Form onSubmit={loginAuthSubmitHandler}>
        <Form.Control
          placeholder="email"
          type="mail"
          ref={emailRef}
        ></Form.Control>
        <Form.Control
          placeholder="password"
          type="password"
          ref={pwdRef}
        ></Form.Control>
        <button type="submit">Login</button>
      </Form>
      <Link to="/reset-password">Forgot Password?</Link>
      <div>{isLoggedIn && <Redirect to="/user/profilepage"></Redirect>}</div>
    </div>
  );
};

export default LoginAuthform;
