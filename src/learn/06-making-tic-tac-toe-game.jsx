import { Helmet } from 'react-helmet-async';
import TicTacToeGame from './components/TicTacToeGame';

function MakingTicTacToeGame() {
  return (
    <>
      <Helmet>
        <title>Making Tic-Tac-Toe Game</title>
      </Helmet>
      <div className="prose">
        <h3>틱택토 (TIC-TAC-TOE)</h3>
        <p>
          틱택토 게임 제작 튜토리얼에서 배우게 될 기술은 React 앱을 구축하는데
          기본이 되며, 이 과정을 완전히 이해하면 React를 보다 깊이 이해할 수
          있습니다.
        </p>
        <TicTacToeGame />
      </div>
    </>
  );
}

export default MakingTicTacToeGame;
