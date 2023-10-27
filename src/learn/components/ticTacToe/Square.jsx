import { func, node, string } from 'prop-types';
import styles from './Square.module.css';

Square.propTypes = {
  children: node,
  className: string,
  onClick: func,
};

function Square({ children, className, onClick }) {
  const classNames = `${styles.component} ${className}`.trim();

  return (
    <button
      type="button"
      className={classNames}
      onClick={onClick}
      disabled={children}
    >
      {children}
    </button>
  );
}

export default Square;
