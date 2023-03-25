import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profile = () => {
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
    </Container>
  );
};

export default Profile;
