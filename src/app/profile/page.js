import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import styles from "../profile/profile.module.css";

export default async function ProtectedRoute() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  return (
    <div className={styles.container}>
      {session?.user ? (
        <>
          <img 
            src={session.user.image} 
            alt="User profile" 
            className={styles.profileImage} 
          />
          <div className={styles.userInfo}>
            <h2 className={styles.userName}>{session.user.name}</h2>
            <p className={styles.userEmail}>{session.user.email}</p>
          </div>
        </>
      ) : (
        <p className={styles.notLoggedIn}>Not logged in</p>
      )}
    </div>
  );
}
