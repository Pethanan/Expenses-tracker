import NavHeader from "../UI/NavHeader";
import SignupForm from "../authorization/SignupForm";

function SignUpPage() {
  return (
    <>
      <NavHeader></NavHeader>
      <SignupForm className="signup-form"></SignupForm>
    </>
  );
}

export default SignUpPage;
