import { node } from 'prop-types';
import styles from './Square.module.css';

Square.propTypes = {
  children: node,
};

function Square({ children }) {
  return (
    <button type="button" className={styles.component}>
      {children}
    </button>
  );
}

export default Square;
