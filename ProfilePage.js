import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthCtx from "../Store/auth-ctx";
import { useSelector } from "react-redux";

const Profile = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
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
        <Link to="/profile/edit">complete now</Link>
      </Container>
      <Container>
        <span>Your email is not verified, </span>
        <Link to="/profile/emailverification">Complete email Verification</Link>
      </Container>
      <Container>
        {isLoggedIn && <Link to="/profile/expenses">Your Expenses</Link>}
        {!isLoggedIn && (
          <Container>
            <span>Please login to continue </span>
            <Link to="/login">Click here to Login</Link>
          </Container>
        )}
      </Container>
    </Container>
  );
};

export default Profile;
