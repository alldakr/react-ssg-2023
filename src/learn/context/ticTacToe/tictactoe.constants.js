import { arrayOf, number, oneOf, shape } from 'prop-types';

export const INITIAL_SQUARES = Array(9).fill(null);

export const PLAYER1 = '⏺';
export const PLAYER2 = '×';

export const PlayerType = oneOf([PLAYER1, PLAYER2]);
export const PlayerListType = arrayOf(PlayerType);
export const BoardsType = arrayOf(PlayerListType);
export const WinnerType = shape({
  player: PlayerType,
  pattern: arrayOf(number),
});

const WINNER_CONDITION = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = (squares) => {
  let winner = null;
  for (const [x, y, z] of WINNER_CONDITION) {
    const player = squares[x];
    if (player && player === squares[y] && player === squares[z]) {
      winner = {
        player,
        pattern: [x, y, z],
      };
      break;
    }
  }

  return winner;
};
