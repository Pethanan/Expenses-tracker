import logo from "./logo.svg";
import "./App.css";
import coverImg from "../src/assets/3386851.jpg";
import SignupForm from "./components/authorization/SignupForm";
import LoginAuthform from "./components/authorization/LoginAuthform";
import { Redirect, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import AuthCtx from "./components/Store/auth-ctx";
import Profile from "./components/pages/ProfilePage";
import EditProfile from "./components/pages/EditProfilePage";

function App() {
  const authCtx = useContext(AuthCtx);
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <SignupForm></SignupForm>
        </Route>
        <Route path="/signup-page" exact>
          <SignupForm></SignupForm>
        </Route>
        <Route path="/login-page" exact>
          <LoginAuthform></LoginAuthform>
          {authCtx.isLoggedIn && <Redirect to="/user/profile-page"></Redirect>}
        </Route>
        <Route path="/user/profile-page" exact>
          <Profile></Profile>
        </Route>
        <Route path="/user/edit-profile">
          <EditProfile></EditProfile>
        </Route>
      </Switch>
    </>
  );
}

export default App;
