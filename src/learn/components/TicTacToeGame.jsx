import { useState } from 'react';
import Stack from './Stack';
import styles from './TicTacToeGame.module.css';
import Board from './ticTacToe/Board';
import History from './ticTacToe/History';
import Info from './ticTacToe/Info';
import {
  INITIAL_SQUARES,
  PLAYER1,
  PLAYER2,
  checkWinner,
} from './ticTacToe/constants';

function TicTacToeGame() {
  // 상태(state)
  const [squares, setSquares] = useState(INITIAL_SQUARES);
  const [gameIndex, setGameIndex] = useState(0);

  // 파생된 상태(derived state)
  const nextPlayer = gameIndex % 2 === 0 ? PLAYER1 : PLAYER2;
  const winner = checkWinner(squares);

  // 사용자가 보드의 스퀘어를 클릭하면 실행
  const playGame = (squareIndex /* 클릭한 스퀘어 인덱스 */) => () => {
    // 게임 승자가 있으면 게임 종료를 알림
    if (winner) return alert('GAME OVER');

    // 다음 게임 턴의 순서
    const nextGameIndex = gameIndex + 1;

    // 보드 업데이트
    setSquares(
      squares.map((square, index) =>
        squareIndex === index ? nextPlayer : square
      )
    );

    // 게임 순서 업데이트
    setGameIndex(nextGameIndex);
  };

  return (
    <div className={styles.component}>
      <h4 className="sr-only">틱택토 게임</h4>
      <Stack gap={16}>
        <Board squares={squares} winner={winner} onPlay={playGame} />
        <Stack vertical gap={8}>
          <Info />
          <History />
        </Stack>
      </Stack>
    </div>
  );
}

export default TicTacToeGame;
