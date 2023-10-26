import styles from './History.module.css';

function History() {
  return (
    <div className={styles.component}>
      <h4 className="sr-only">게임 기록</h4>
      <ol>
        <li>
          <button type="button">게임 시작</button>
        </li>
        <li>
          <button type="button">게임 #1</button>
        </li>
        <li>
          <button type="button" disabled>
            게임 #2
          </button>
        </li>
      </ol>
    </div>
  );
}

export default History;
