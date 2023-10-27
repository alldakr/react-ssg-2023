import { func } from 'prop-types';
import styles from './Board.module.css';
import Square from './Square';
import squareStyles from './Square.module.css';
import { SQUARES_TYPE, WINNER_TYPE } from './constants';

Board.propTypes = {
  squares: SQUARES_TYPE.isRequired,
  winner: WINNER_TYPE.isRequired,
  onPlay: func,
};

function Board({ squares, winner, onPlay }) {
  return (
    <div className={styles.component}>
      {squares.map((square, index) => {
        let winnerStyle = '';

        if (winner) {
          for (const winnerIndex of winner.pattern) {
            if (index === winnerIndex) {
              winnerStyle = squareStyles.winner;
              break;
            }
          }
        }

        return (
          <Square key={index} className={winnerStyle} onClick={onPlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Board;
