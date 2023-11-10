// This component will display the user's profile information.
import React from "react";

const UserProfile = ({ user }) => {
  return (
    <>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>Followers: {user.followers}</div>
      <div>Country: {user.country}</div>
      {user.image && <img src={user.image} alt="User profile" />}
    </>
  );
};

export default UserProfile;
