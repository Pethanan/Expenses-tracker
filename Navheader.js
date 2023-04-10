import React, { useContext } from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/auth";
import "./Navheader.css";

const NavHeader = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isPremiumActivated = useSelector(
    (state) => state.theme.isPremiumActivated
  );

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div>
      <Nav className={`${isPremiumActivated ? "darkmode" : "nodarkmode"}`}>
        <div>Something</div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          {!isLoggedIn && (
            <Button>
              <Link
                to="/login"
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
    </div>
  );
};

export default NavHeader;
