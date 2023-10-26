import styles from './Board.module.css';
import Square from './Square';

// 보드 게임 말(알): ⏺ ×

function Board() {
  return (
    <div className={styles.component}>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square>⏺</Square>
      <Square></Square>
      <Square>×</Square>
      <Square></Square>
      <Square></Square>
    </div>
  );
}

export default Board;
