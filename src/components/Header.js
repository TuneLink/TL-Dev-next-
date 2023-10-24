import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navDiv}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>

        <div className={styles.loginDiv}>
          <Link href="/login">
            <div className={styles.loginButton}>Login</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;