// 보드 게임 말(알)
export const PLAYER1 = '⏺';
export const PLAYER2 = '×';

// 초기 사각형 집합
export const INITIAL_SQUARES = Array(9).fill(null);

// 게임 승리 조건
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

// 승리 체크 함수
export const checkWinner = (squares) => {
  let winner = null;

  for (const [x, y, z] of WINNER_CONDITION) {
    const player = squares[x];
    if (player && player === squares[y] && player === squares[z]) {
      winner = {
        player,
        pattern: [x, y, z],
      };
    }
  }

  return winner;
};
