import { useCallback, useState } from 'react';
import Stack from '../../components/Stack';
import styles from './TicTacToeGame.module.css';
import Board from './Board';
import History from './History';
import Info from './Info';
import {
  INITIAL_SQUARES,
  PLAYER1,
  PLAYER2,
  checkWinner,
} from './tictactoe.constants';

function TicTacToeGame() {
  const [boards, setBoards] = useState([INITIAL_SQUARES]);
  const [gameIndex, setGameIndex] = useState(0);

  const currentBoard = boards[gameIndex];
  const nextPlayer = gameIndex % 2 === 0 ? PLAYER1 : PLAYER2;
  const winner = checkWinner(currentBoard);
  const isDraw = !winner && currentBoard.every(Boolean);

  const playGame = (nextIndex) => () => {
    if (winner) return alert('GAME OVER');

    const nextGameIndex = gameIndex + 1;
    setBoards((boards) => [
      ...boards.slice(0, nextGameIndex),
      currentBoard.map((square, index) =>
        nextIndex === index ? nextPlayer : square
      ),
    ]);
    setGameIndex(nextGameIndex);
  };

  const timeTravel = useCallback(
    (travelIndex) => () => setGameIndex(travelIndex),
    []
  );

  return (
    <div className={styles.component}>
      <h4 className="sr-only">틱택토 게임</h4>
      <Stack gap={16}>
        <Board squares={currentBoard} onPlay={playGame} winner={winner} />
        <Stack vertical gap={8}>
          <Info nextPlayer={nextPlayer} winner={winner} isDraw={isDraw} />
          <History
            boards={boards}
            gameIndex={gameIndex}
            onTimeTravel={timeTravel}
          />
        </Stack>
      </Stack>
    </div>
  );
}

export default TicTacToeGame;
