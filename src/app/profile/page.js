import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";


export default async function ProtectedRoute() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  return (
    <>
      <h1>profile page</h1>
      {session?.user?.name ? (
        <>
          <div>{session?.user?.name}</div>
          <div>{session?.user?.email}</div>
          {session?.user?.image && (
            <img src={session?.user?.image} alt="User profile" />
          )}
        </>
      ) : (
        <div>Not logged in</div>
      )}
    </>
  );
}
