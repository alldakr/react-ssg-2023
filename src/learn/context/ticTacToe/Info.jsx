import { bool } from 'prop-types';
import { PlayerType, WinnerType } from './tictactoe.constants';
import styles from './Info.module.css';

Info.propTypes = {
  nextPlayer: PlayerType,
  winner: WinnerType,
  isDraw: bool,
};

function Info({ nextPlayer, winner, isDraw }) {
  let statusMessage = `다음 플레이어 ${nextPlayer}`;

  if (winner) {
    statusMessage = `게임 위너!  ${winner.player}`;
  }

  if (isDraw) {
    statusMessage = `음.. 무승부 😳`;
  }

  return <div className={styles.component}>{statusMessage}</div>;
}

export default Info;
