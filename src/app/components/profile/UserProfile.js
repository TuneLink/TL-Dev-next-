import React from "react";
import Image from "next/image";

const UserProfile = ({ user }) => {

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center">
          <div
            style={{
              borderRadius: "50%",
              overflow: "hidden",
              width: "150px",
              height: "150px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              src={user.image}
              alt="Profile Picture"
              width={150}
              height={150}
              objectFit="cover" // This ensures the image covers the area without stretching
            />
          </div>
        </div>
        <div className="col-md-8">
          <h2>{user.name}</h2>
          <p>Followers: {user.followers}</p>
          <p>{user.country}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
