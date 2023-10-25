import { NavLink } from 'react-router-dom';
import { navigationList } from '@/learn/navigationList';
import { getSlug } from '@/utils';
import styles from './SideBar.module.css';

function SideBar() {
  return (
    <aside className={styles.component}>
      <h2 className="sr-only">학습 주제</h2>
      <ul>
        {navigationList.map(({ id, title }) => (
          <li key={id}>
            <NavLink
              to={getSlug(title)}
              className={({ isActive }) => (isActive ? styles.active : null)}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
