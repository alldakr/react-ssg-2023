import Stack from './Stack';
import Board from './ticTacToe/Board';
import History from './ticTacToe/History';
import styles from './TicTacToeGame.module.css';

function TicTacToeGame() {
  return (
    <div className={styles.component}>
      <h4 className="sr-only">틱택토 게임</h4>
      <Stack gap={16}>
        <Board />
        <History />
      </Stack>
    </div>
  );
}

export default TicTacToeGame;
