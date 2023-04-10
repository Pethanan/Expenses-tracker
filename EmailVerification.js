import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import AuthCtx from "../Store/auth-ctx";
import { useSelector } from "react-redux";

const EmailVerification = () => {
  const authToken = useSelector((state) => state.auth.authToken);

  const mailVerificationHandler = async () => {
    const fetcchMailVerification = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAQwHgTNV3DUHtjPgoYEx5Z_n0DfzO2NXo",
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
  };

  return (
    <div>
      <Button onClick={mailVerificationHandler}>Verify yoyr email id</Button>
    </div>
  );
};

export default EmailVerification;
