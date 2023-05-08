import logo from "./logo.svg";
import "./App.css";
import coverImg from "../src/assets/3386851.jpg";
import SignupForm from "./components/authorization/SignupForm";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// import { useContext } from "react";
// import AuthCtx from "./components/Store/auth-ctx";
import Profile from "./components/pages/ProfilePage";
import EmailVerification from "./components/pages/EmailVerification";
import NavHeader from "./components/UI/NavHeader";
import ResetPassword from "./components/pages/ResetPassword";
import ExpensesPage from "./components/pages/ExpensesPage";
import { useSelector } from "react-redux";
import LoginForm from "./components/authorization/LoginForm";
import SignUpPage from "./components/pages/SignUpPage";
import WelcomePage from "./components/pages/Welcome";
import UserHomePage from "./components/pages/UserHomePage";
import UserInfoPage from "./components/pages/UserInfoPage";
import ExpensesAnalysisPage from "./components/pages/ExpensesAnalysisPage";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const authCtx = useContext(AuthCtx);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <WelcomePage></WelcomePage>
          </Route>
          <Route path="/signup" exact>
            <SignUpPage></SignUpPage>
          </Route>
          <Route path="/reset-password" exact>
            <ResetPassword />
          </Route>
          <Route path="/profile" exact>
            {isLoggedIn && <Profile />}
            {!isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route path="/profile/expenses" exact>
            {isLoggedIn && <ExpensesPage />}
            {!isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route path="/login" exact>
            {!isLoggedIn && <LoginForm></LoginForm>}
            {isLoggedIn && <Redirect to="/userIndexPage"></Redirect>}
          </Route>
          <Route path="/userIndexPage" exact>
            {isLoggedIn && <UserHomePage></UserHomePage>}
            {!isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route path="/profile/accountInfo" exact>
            {isLoggedIn && <UserInfoPage />}
            {!isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route path="/profile/emailverification" exact>
            {isLoggedIn && <EmailVerification />}
            {!isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route path="/profile/expenses-analysis" exact>
            {isLoggedIn && <ExpensesAnalysisPage />}
            {!isLoggedIn && <Redirect to="/login" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
