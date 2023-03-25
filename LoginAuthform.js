import React, { useRef } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginAuthform = () => {
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
    console.log(authData.idToken);
    alert("Login uccesful!");
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
