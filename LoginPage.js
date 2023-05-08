import "./App.css";
import coverImg from "../src/assets/3386851.jpg";
import SignupForm from "./components/authorization/SignupForm";
import LoginAuthform from "../authorization/LoginAuthform";
import NavHeader from "../UI/NavHeader";

const loginPage = () => {
  return (
    <>
      <div className="cover-img-container">
        <NavHeader></NavHeader>
        <LoginAuthform></LoginAuthform>
      </div>
    </>
  );
};

export default loginPage;
