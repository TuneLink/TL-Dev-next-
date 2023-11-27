/*
 This profile page uses the hooks/useSpotify.js hook to fetch the user's liked songs from Spotify.
 Also, the components/UserProfile.js and components/LikedSongsList.js components are used
 to display the user's profile information and the list of liked songs.
*/

"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSpotify } from "../hooks/useSpotify";
import UserProfile from "../components/UserProfile";
import LikedSongsList from "../components/LikedSongsList";
import TopArtistsList from "../components/TopArtistsList";

export default function ProtectedRoute() {
  const { data: session, status } = useSession();

  const { likedSongs, fetchLikedSongs, topArtists, fetchTopArtists } =
    useSpotify(session);

  useEffect(() => {
    if (session) {
      fetchLikedSongs();
      fetchTopArtists();
    }
  }, [session]);

  const handleSignOut = () => {
    if (confirm("Are you sure you want to sign out?")) {
      signOut({ callbackUrl: "/" });
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return (
      <>
        <h2>Profile Page</h2>
        <p>You need to be signed in to view this page.</p>
        <button onClick={() => signIn()}>Sign In</button>
      </>
    );
  }

  return (
    <>
      <h2>Profile Page</h2>
      <UserProfile user={session.user} />
      <LikedSongsList songs={likedSongs} />
      <TopArtistsList artists={topArtists} />
      <button onClick={handleSignOut}>Sign Out</button>
    </>
  );
}
