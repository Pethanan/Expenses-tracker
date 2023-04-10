import logo from "./logo.svg";
import "./App.css";
import coverImg from "../src/assets/3386851.jpg";
import SignupForm from "./components/authorization/SignupForm";
import LoginAuthform from "./components/authorization/LoginAuthform";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import AuthCtx from "./components/Store/auth-ctx";
import Profile from "./components/pages/ProfilePage";
import EditProfile from "./components/pages/EditProfilePage";
import EmailVerification from "./components/pages/EmailVerification";
import NavHeader from "./components/pages/Navheader";
import ResetPassword from "./components/pages/ResetPassword";
import ExpensesPage from "./components/pages/ExpensesPage";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const authCtx = useContext(AuthCtx);
  return (
    <>
      <BrowserRouter>
        <NavHeader></NavHeader>

        <Switch>
          <Route path="/" exact>
            <SignupForm></SignupForm>
          </Route>
          <Route path="/signup" exact>
            <SignupForm></SignupForm>
          </Route>
          <Route path="/reset-password" exact>
            <ResetPassword />
          </Route>
          <Route path="/profile" exact>
            <Profile></Profile>
          </Route>
          <Route path="/login" exact>
            {!isLoggedIn && <LoginAuthform></LoginAuthform>}
            {isLoggedIn && <Redirect to="/profile"></Redirect>}
          </Route>

          <Route path="/profile/expenses" exact>
            <ExpensesPage />
          </Route>
          <Route path="/profile/edit" exact>
            <EditProfile></EditProfile>
          </Route>
          <Route to="/profile/emailverification">
            <EmailVerification />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
