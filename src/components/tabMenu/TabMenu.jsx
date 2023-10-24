import { useState } from 'react';
import styles from './TabMenu.module.css';
import { arrayOf, bool, shape, string } from 'prop-types';

const initialMenu = [
  { id: 'menu-item-1', content: 'Music', disabled: false },
  { id: 'menu-item-2', content: 'Podcasts', disabled: false },
  { id: 'menu-item-3', content: 'Live', disabled: true },
];

TabMenu.propTypes = {
  menu: arrayOf(
    shape({
      id: string,
      content: string,
      disabled: bool,
    }).isRequired
  ),
};

function TabMenu({ menu = initialMenu }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ul className={styles.component}>
      {menu.map((item, index) => (
        <li key={item.id}>
          <button
            type="button"
            className={activeIndex === index ? styles.active : null}
            onClick={() => setActiveIndex(index)}
            disabled={item.disabled}
          >
            {item.content}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TabMenu;
