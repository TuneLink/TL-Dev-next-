"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import TopTracks from "../components/features/TopTracks";
import TopArtistsPlaylistCreator from "../components/features/TopArtistsPlaylistCreator";
// This component is a placeholder for the features page.
// It will display the user's top tracks and whatever else we want to add.
export default function ProtectedRoute() {
  const { data: session, status } = useSession();
  
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
        <h2>Features Page</h2>
        <p>You need to be signed in to view this page.</p>
        <button className="btn btn-primary orange-btn" onClick={() => signIn()}>
          Sign In
        </button>{" "}
      </>
    );
  }

  return (
    <>
      <h2>Features Page</h2>
      {session?.user && (
        <>
          {/* Top Tracks Section */}
          <TopArtistsPlaylistCreator session={session} />
          <TopTracks session={session} />
        </>
      )}
    </>
  );
}
