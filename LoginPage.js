import "./App.css";
import coverImg from "../src/assets/3386851.jpg";
import SignupForm from "./components/authorization/SignupForm";
import LoginAuthform from "../authorization/LoginAuthform";

function login() {
  return (
    <>
      <div className="cover-img-container">
        <img src={coverImg} style={{ width: "100%", height: "auto" }} />
        <LoginAuthform></LoginAuthform>
      </div>
    </>
  );
}

export default login;
