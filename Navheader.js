import React, { useContext } from "react";
import { Button, Nav } from "react-bootstrap";
import { Link, NavLink, Redirect } from "react-router-dom";
import AuthCtx from "../Store/auth-ctx";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/auth";

const NavHeader = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <>
      <Nav
        style={{
          padding: "15px 50px",
          backgroundColor: "black",
          color: "azure",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "700",
        }}
      >
        <div>Something</div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          {!isLoggedIn && (
            <Button>
              <Link
                to="/login-page"
                style={{
                  fontWeight: "700",
                  textDecoration: "none",
                  color: "azure",
                }}
              >
                Login
              </Link>
            </Button>
          )}
          {isLoggedIn && (
            <Button
              style={{
                fontWeight: "700",
              }}
              onClick={logoutHandler}
            >
              Logout
            </Button>
          )}
        </div>
      </Nav>
    </>
  );
};

export default NavHeader;
