// Header.js
import Link from "next/link";
import styles from "../../styles/Header.module.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Importing Bootstrap icons
import AuthButton from "./AuthButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navDiv}>
        {/* Brand name with music icon */}

        <Link href="/">
          <span className={styles.brandLogo}>
            <i className="bi bi-file-music-fill" /> TuneLink
          </span>
        </Link>

        <ul className={styles.navList}>
          <li>
            <Link href="/demo">
              <span>Discover</span>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <span>Features</span>
            </Link>
          </li>
          {/* Other nav items can be added here test test*/}
        </ul>

        <div className={styles.loginDiv}>
          <AuthButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
