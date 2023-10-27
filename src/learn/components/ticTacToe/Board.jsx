import { useState } from 'react';
import styles from './Board.module.css';
import Square from './Square';

// 보드 게임 말(알)
const PLAYER1 = '⏺';
const PLAYER2 = '×';

// 초기 사각형 집합
const INITIAL_SQUARES = Array(9).fill(null);

function Board() {
  // 상태(state)
  const [squares, setSquares] = useState(INITIAL_SQUARES);
  const [gameIndex, setGameIndex] = useState(0);

  // 파생된 상태(derived state)
  const nextPlayer = gameIndex % 2 === 0 ? PLAYER1 : PLAYER2;

  console.log(nextPlayer);

  // 사용자가 보드의 스퀘어를 클릭하면 실행
  const playGame = (squareIndex /* 클릭한 스퀘어 인덱스 */) => () => {
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
      {squares.map((square, index) => {
        return (
          <Square key={index} onClick={playGame(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Board;
