import { func, node } from 'prop-types';
import styles from './Square.module.css';

Square.propTypes = {
  children: node,
  onClick: func,
};

function Square({ children, onClick }) {
  return (
    <button type="button" className={styles.component} onClick={onClick}>
      {children}
    </button>
  );
}

export default Square;
