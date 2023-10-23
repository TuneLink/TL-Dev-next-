import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2023 TuneLink. All rights reserved. Code on <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
    </footer>
  );
};

export default Footer;
