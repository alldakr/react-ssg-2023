import { RouterProvider } from 'react-router-dom';
import router from '@/learn/routes';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.component}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
