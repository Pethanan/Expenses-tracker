import React, { useState } from "react";

export const AuthCtx = React.createContext({
  authToken: null,
  isLoggedIn: false,
  login: (token) => {},
});

export const AuthCtxProvider = (props) => {
  const initialToken = localStorage.getItem("idToken");
  const [token, setToken] = useState(initialToken);

  const loggedIn = !!token;
  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn);

  const loginHandler = (token) => {
    setIsLoggedIn(true);
    console.log("context");
    setToken(token);
    localStorage.setItem("idToken", token);
  };

  const authCtxValue = {
    isLoggedIn: isLoggedIn,
    authToken: token,
    login: loginHandler,
  };
  return (
    <AuthCtx.Provider value={authCtxValue}>{props.children}</AuthCtx.Provider>
  );
};

export default AuthCtx;
