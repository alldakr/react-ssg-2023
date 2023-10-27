import { func } from 'prop-types';
import { PlayerListType, WinnerType } from './tictactoe.constants';
import styles from './Board.module.css';
import Square from './Square';
import squareStyles from './Square.module.css';

Board.propTypes = {
  squares: PlayerListType.isRequired,
  winner: WinnerType,
  onPlay: func.isRequired,
};

function Board({ squares, winner, onPlay }) {
  return (
    <div className={styles.component}>
      {squares?.map((square, index) => {
        let activeClassName = '';
        if (winner) {
          const { pattern } = winner;
          for (const activeIndex of pattern) {
            if (index === activeIndex) {
              activeClassName = squareStyles.active;
              break;
            }
          }
        }

        return (
          <Square
            key={index}
            className={activeClassName}
            onClick={onPlay(index)}
          >
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Board;
