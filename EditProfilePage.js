import React, { useContext, useRef, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./EditProfilePage.css";

const EditProfile = () => {
  const [userDetailsComplete, setUserDetailsComplete] = useState(null);
  const isPremiumActivated = useSelector(
    (state) => state.theme.isPremiumActivated
  );
  const authToken = useSelector((state) => state.auth.authToken);

  useEffect(() => {
    const fetchingUserDetails = async () => {
      const fetchedDetails = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyB0gvu4DcaKZpcr5ICbUE_wucAVfXNp96s",
        {
          method: "POST",
          body: JSON.stringify({ idToken: authToken }),
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
      idToken: authToken,
      displayName: enteredFullName,
      photoUrl: enteredProfilePhotoURLRef,
      returnSecureToken: true,
    };
    const editedResponse = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB0gvu4DcaKZpcr5ICbUE_wucAVfXNp96s",
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
      className={`${isPremiumActivated ? "darkmode" : ""}`}
      onSubmit={editSubmitHandler}
      style={{
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
