import React, { useState } from "react";
import { createSlice } from "@reduxjs/toolkit";

// export const AuthCtx = React.createContext({
//   authToken: null,
//   isLoggedIn: false,
//   logout: () => {},
//   login: (token) => {},
// });

// export const AuthCtxProvider = (props) => {
//   const initialToken = localStorage.getItem("idToken");
//   const [token, setToken] = useState(initialToken);

//   const loggedIn = !!token;
//   const [isLoggedIn, setIsLoggedIn] = useState(loggedIn);

//   const loginHandler = (token) => {
//     setIsLoggedIn(true);
//     console.log("context");
//     setToken(token);
//     localStorage.setItem("idToken", token);
//   };

//   const logoutHandler = () => {
//     setIsLoggedIn(false);
//     setToken(null);
//     localStorage.removeItem("idToken");
//   };

//   const authCtxValue = {
//     isLoggedIn: isLoggedIn,
//     authToken: token,
//     login: loginHandler,
//     logout: logoutHandler,
//   };
//   return (
//     <AuthCtx.Provider value={authCtxValue}>{props.children}</AuthCtx.Provider>
//   );
// };

// export default AuthCtx;

const initialAuthState = { isLoggedIn: false, authToken: null };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.authToken = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.authToken = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
