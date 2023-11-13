// This component will display the user's profile information.
import React from "react";
import Image from "next/image";

const UserProfile = ({ user }) => {
  return (
    <>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>Followers: {user.followers}</div>
      <div>Country: {user.country}</div>
      {user.image && <Image src={user.image} alt="User profile" />}
    </>
  );
};

export default UserProfile;
