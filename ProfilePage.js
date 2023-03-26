import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthCtx from "../Store/auth-ctx";

const Profile = () => {
  const authCtx = useContext(AuthCtx);
  return (
    <Container
      style={{
        margin: "0 auto",
        marginTop: "200px",
        display: "flex",
        justifyContent: "center",
        width: "600px",
        flexDirection: "column",
      }}
    >
      <Container>
        <span>Your profile is incomplete, </span>
        <Link to="/user/edit-profile">complete now</Link>
      </Container>
      <Container>
        <span>Your email is not verified, </span>
        <Link to="/user/emailverification">Complete email Verification</Link>
      </Container>
      <Container>
        {authCtx.isLoggedIn && <Link to="/user/expenses">Your Expenses</Link>}
        {!authCtx.isLoggedIn && (
          <Container>
            <span>Please login to continue </span>
            <Link to="/login-page">Click here to Login</Link>
          </Container>
        )}
      </Container>
    </Container>
  );
};

export default Profile;
