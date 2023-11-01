"use client";
import { getUserProfile } from "../../lib/spotify";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchUserProfile() {
      const res = await getUserProfile();
      const data = await res.json();
      setProfile(data);
    }

    fetchUserProfile();
  }, []);

  return (
    <div>
      {profile ? (
        <div>
          <h2>Profile Information</h2>
          <p>Username: {profile.display_name}</p>
          <p>Email: {profile.email}</p>
          {profile.images.length > 0 && (
            <Image src={profile.images[0].url} alt={profile.display_name} />
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
