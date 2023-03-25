import React, { useContext, useRef, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import AuthCtx from "../Store/auth-ctx";

const LoginAuthform = () => {
  const authCtx = useContext(AuthCtx);
  const emailRef = useRef(null);
  const pwdRef = useRef(null);
  const [isLoggedin, setIsLoggedin] = useState(false);

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
      setIsLoggedin(true);
      console.log(authData.idToken);
      alert("Login uccesful!");
      authCtx.login(authData.idToken);
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
      <div>
        <Link to="/">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default LoginAuthform;
