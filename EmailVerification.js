import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import AuthCtx from "../Store/auth-ctx";
import { useDispatch, useSelector } from "react-redux";
import NavHeader from "../UI/NavHeader";
import { authSliceActions } from "../Store/authSlice";

const EmailVerification = () => {
  const dispatch = useDispatch();
  const userMail = useSelector((state) => state.auth.userMail);
  const authToken = useSelector((state) => state.auth.authToken);

  const mailVerificationHandler = async () => {
    const fetcchMailVerification = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDycBIyb5eyGiqEBkG_inxrLSalZxB0qLI",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: authToken,
        }),
      }
    );

    const VerificationResponse = await fetcchMailVerification.json();
    console.log(VerificationResponse);
    dispatch(authSliceActions.emailVerifiedUpdate(true));
  };

  return (
    <div>
      <Button onClick={mailVerificationHandler}>Verify yoyr email id</Button>
    </div>
  );
};

export default EmailVerification;
