// Header.js
import Link from "next/link";
import styles from "../styles/Header.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importing Bootstrap icons

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navDiv}>
        {/* Brand name with music icon */}
        <Link href="/">
          <span className={styles.brandLogo}>
            <i className="bi bi-file-music-fill"></i>
            TuneLink
          </span>
        </Link>

        <ul className={styles.navList}>
          <li>
            <Link href="/demo">
              <span>Try it out!</span>
            </Link>
          </li>
          {/* Other nav items can be added here */}
        </ul>

        <div className={styles.loginDiv}>
          <Link href="/login">
            <span className={styles.loginButton}>Login</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
