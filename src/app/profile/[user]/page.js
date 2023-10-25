import React from 'react';

const Profile = () => {
  return (
    <div className="profile">
      <img
        src="https://via.placeholder.com/150"
        alt="User Profile"
        className="profile-picture"
      />
      <div className="profile-info">
        <h2>User Name</h2>
        <p>Email: user@example.com</p>
      </div>
    </div>
  );
};

export default Profile;
