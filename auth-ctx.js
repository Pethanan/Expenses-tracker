import React, { useState } from "react";

export const AuthCtx = React.createContext({
  isLoggedIn: false,
  login: () => {},
});

export const AuthCtxProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {
    setIsLoggedIn(true);
    console.log("context");
  };

  const authCtxValue = { isLoggedIn: isLoggedIn, login: loginHandler };
  return (
    <AuthCtx.Provider value={authCtxValue}>{props.children}</AuthCtx.Provider>
  );
};

export default AuthCtx;
