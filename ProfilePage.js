import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div style={{ margin: "0 auto" }}>
      <p>
        Your profile is incomplete,
        <Link to="/user/edit-profile">complete now</Link>
      </p>
    </div>
  );
};

export default Profile;
