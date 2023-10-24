import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.component}>
      <address lang="en">
        <small>Meta Open Source &copy; {currentYear}</small>
      </address>
    </footer>
  );
}

export default Footer;
