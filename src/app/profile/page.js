/*
 This profile page uses the hooks/useSpotify.js hook to fetch the user's liked songs from Spotify.
 Also, the components/UserProfile.js and components/LikedSongsList.js components are used
 to display the user's profile information and the list of liked songs.
*/

"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useSpotify } from "../hooks/useSpotify";
import UserProfile from "../components/UserProfile";
import LikedSongsList from "../components/LikedSongsList";

export default function ProtectedRoute() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  const { likedSongs, fetchLikedSongs } = useSpotify(session);

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  const handleSignOut = () => {
    if (confirm("Are you sure you want to sign out?")) {
      signOut({ callbackUrl: "/" });
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>Profile Page</h2>
      {session?.user && (
        <>
          <UserProfile user={session.user} />
          <h3>Click button below to get your 5 most recently liked songs!</h3>
          <button onClick={fetchLikedSongs}>Get Songs Button</button>
          <LikedSongsList songs={likedSongs} />
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      )}
    </>
  );
}
