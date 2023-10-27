import { func, string } from 'prop-types';
import { PlayerType } from './tictactoe.constants';
import styles from './Square.module.css';

Square.propTypes = {
  children: PlayerType,
  className: string,
  onClick: func,
};

function Square({ children, className, onClick }) {
  return (
    <button
      type="button"
      className={`${styles.component} ${className}`.trim()}
      disabled={children}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Square;
