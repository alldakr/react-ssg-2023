import { Outlet } from 'react-router-dom';
import styles from './Main.module.css';

function Main() {
  return (
    <main className={styles.component}>
      <Outlet />
    </main>
  );
}

export default Main;
