import React, { useContext, useRef, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import AuthCtx from "../Store/auth-ctx";

const EditProfile = () => {
  const [userDetailsComplete, setUserDetailsComplete] = useState(null);

  const authCtx = useContext(AuthCtx);
  useEffect(() => {
    const fetchingUserDetails = async () => {
      const fetchedDetails = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAQwHgTNV3DUHtjPgoYEx5Z_n0DfzO2NXo",
        {
          method: "POST",
          body: JSON.stringify({ idToken: authCtx.authToken }),
        }
      );
      const fetchedDetailsUsersData = await fetchedDetails.json();
      const usersData = fetchedDetailsUsersData.users[0];
      profilePhotoURLRef.current.value = usersData.photoUrl;
      fullNameRef.current.value = usersData.displayName;
    };
    fetchingUserDetails();
  }, []);

  const fullNameRef = useRef(null);
  const profilePhotoURLRef = useRef(null);

  const editSubmitHandler = async (e) => {
    e.preventDefault();
    const enteredFullName = fullNameRef.current.value;
    const enteredProfilePhotoURLRef = profilePhotoURLRef.current.value;
    const payloadObject = {
      idToken: authCtx.authToken,
      displayName: enteredFullName,
      photoUrl: enteredProfilePhotoURLRef,
      returnSecureToken: true,
    };
    const editedResponse = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAQwHgTNV3DUHtjPgoYEx5Z_n0DfzO2NXo",
      {
        method: "POST",
        body: JSON.stringify(payloadObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const editedResponseData = await editedResponse.json();
    setUserDetailsComplete(editedResponseData);
    console.log(editedResponseData);
  };

  return (
    <Form
      onSubmit={editSubmitHandler}
      style={{
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        margin: "100px",
      }}
    >
      <label>Full Name</label>
      <input type="text" ref={fullNameRef}></input>
      <label>Profile photo URL</label>
      <input type="text" ref={profilePhotoURLRef}></input>
      <button type="submit">Submit</button>
    </Form>
  );
};

export default EditProfile;
