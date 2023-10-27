import { func, number } from 'prop-types';
import { BoardsType } from './tictactoe.constants';
import styles from './History.module.css';

History.propTypes = {
  boards: BoardsType,
  gameIndex: number,
  onTimeTravel: func,
};

function History({ boards, gameIndex, onTimeTravel }) {
  return (
    <div className={styles.component}>
      <h4 className="sr-only">게임 기록</h4>
      <ol>
        {boards.map((_, index) => (
          <li key={index}>
            <button
              type="button"
              disabled={gameIndex === index}
              onClick={onTimeTravel(index)}
            >
              {index === 0 ? '게임 시작' : `게임 #${index}`}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default History;
