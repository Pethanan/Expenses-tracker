import React, { useContext } from "react";
import { Button, Nav } from "react-bootstrap";
import { NavLink, Redirect } from "react-router-dom";
import AuthCtx from "../Store/auth-ctx";

const NavHeader = () => {
  const authCtx = useContext(AuthCtx);

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
          {!authCtx.isLoggedIn && (
            <Redirect
              style={{ fontWeight: "700", color: "white" }}
              to="/login-page"
            >
              Login
            </Redirect>
          )}
          {authCtx.isLoggedIn && (
            <Button style={{ fontWeight: "700" }} onClick={authCtx.logout}>
              Logout
            </Button>
          )}
        </div>
      </Nav>
    </>
  );
};

export default NavHeader;
