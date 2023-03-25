import logo from "./logo.svg";
import "./App.css";
import coverImg from "../src/assets/3386851.jpg";
import SignupForm from "./components/authorization/SignupForm";
import LoginAuthform from "./components/authorization/LoginAuthform";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <SignupForm></SignupForm>
        </Route>
        <Route path="/signup-page">
          <SignupForm></SignupForm>
        </Route>
        <Route path="/login-page">
          <LoginAuthform></LoginAuthform>
        </Route>
      </Switch>
    </>
  );
}

export default App;
