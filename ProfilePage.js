import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthCtx from "../Store/auth-ctx";
import { useSelector } from "react-redux";
import NavHeader from "../UI/NavHeader";
import "./ProfilePage.css";
import { useState } from "react";

const ProfilePage = () => {
  const [sidebar, setSidebar] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  return (
    <>
      <NavHeader />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="white"
        className="w-6 h-6 sidebar-toggler"
        onClick={toggleSidebar}
        style={{ backgroundColor: "blue" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <ul className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
        <li className="sidebar-item">
          <Link to="profile/accountInfo">Account Info</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/profile/expenses">Expenses</Link>
        </li>
      </ul>
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
          <Link to="/profile/emailverification">
            Complete email Verification
          </Link>
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
    </>
  );
};

export default ProfilePage;
