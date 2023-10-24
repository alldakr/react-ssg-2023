import { Link } from 'react-router-dom';
import reactLogo from '@/assets/react.svg';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.component}>
      <HomeLink />
    </header>
  );
}

function HomeLink() {
  return (
    <h1 className={styles.homelink}>
      <Link to="/" lang="en">
        <img src={reactLogo} alt="" height={32} />
        React. Step by Step
      </Link>
    </h1>
  );
}

export default Header;
