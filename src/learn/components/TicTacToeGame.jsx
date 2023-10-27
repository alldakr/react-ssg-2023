import Stack from './Stack';
import styles from './TicTacToeGame.module.css';
import Board from './ticTacToe/Board';
import History from './ticTacToe/History';
import Info from './ticTacToe/Info';

function TicTacToeGame() {
  return (
    <div className={styles.component}>
      <h4 className="sr-only">틱택토 게임</h4>
      <Stack gap={16}>
        <Board />
        <Stack vertical gap={8}>
          <Info />
          <History />
        </Stack>
      </Stack>
    </div>
  );
}

export default TicTacToeGame;
