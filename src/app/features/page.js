"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSpotify } from "../hooks/useSpotify";
import { useState } from "react";
import TopTracks from "../components/TopTracks";
import RecommendedTracks from "../components/RecommendedTracks";

// This component is a placeholder for the features page.
// It will display the user's top tracks and whatever else we want to add.
export default function ProtectedRoute() {
  const { data: session, status } = useSession();

  // States to manage the visibility of lists
  const [showList1, setShowList1] = useState(false);
  const [showList2, setShowList2] = useState(false);
  const [showList3, setShowList3] = useState(false);

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
        <button onClick={() => signIn()}>Sign In</button>
      </>
    );
  }

  return (
    <>
      <h2>Features Page</h2>
      {session?.user && (
        <>
          {/* Top Tracks Section */}
          <button onClick={() => setShowList1(!showList1)}>
            Top tracks
          </button>
          {showList1 && <TopTracks session={session} />}


          {/* Second List Section */}
          <button onClick={() => setShowList2(!showList2)}>
            recommended Songs
          </button>
          {showList2 && <RecommendedTracks session={session} />}


          <button onClick={handleSignOut}>Sign Out</button>
        </>
      )}
    </>
  );
}