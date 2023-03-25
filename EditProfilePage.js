import React from "react";

const EditProfile = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        margin: "100px",
      }}
    >
      <label>Full Name</label>
      <input type="text"></input>
      <label>Profile photo URL</label>
      <input type="text"></input>
    </div>
  );
};

export default EditProfile;
