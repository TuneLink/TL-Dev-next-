"use client";
import { useSession, signIn, signOut } from "next-auth/react";

const AuthButton = () => {
  const { data: session } = useSession();

  const handleSignOut = () => {
    if (confirm("Are you sure you want to sign out?")) {
      signOut({ callbackUrl: "/" });
    }
  };

  if (session) {
    return (
      <>
        <br />
        <span style={{ marginRight: "10px" }}>{session.user.name}</span>
        <button className="btn btn-secondary" onClick={handleSignOut}>
          Sign Out
        </button>
      </>
    );
  }
  return (
    <>
      <br />
      <button className="btn btn-light" onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
};

export default AuthButton;
