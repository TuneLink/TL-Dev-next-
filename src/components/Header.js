import Link from "next/link";
import styles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navDiv}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>

        <div className={styles.loginDiv}>
          <Link href="/api/auth/signin">
            <div className={styles.loginButton}>Login with Spotify</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
