import { Helmet } from 'react-helmet-async';
import TicTacToeGame from './context/ticTacToe/TicTacToeGame';

function PassingDataDeeplywithContext() {
  return (
    <>
      <Helmet>
        <title>Passing Data Deeply with Context</title>
      </Helmet>
      <div className="prose">
        <h3>컨텍스트를 활용(상태 공급)</h3>
        <p>
          일반적으로 Props를 통해 상위 컴포넌트에서 하위 컴포넌트로 데이터를
          전달합니다.
        </p>
        <p>
          하지만 전달하는 Props는 트리 중간에 위치한 여러 컴포넌트를 통해
          전달해야 하거나, 앱의 수많은 컴포넌트에서 동일한 데이터가 필요한 경우
          코드가 장황해지고 관리가 불편해질 수 있습니다.
        </p>
        <p>
          이런 경우 컨텍스트(Context)를 사용하면 상위 컴포넌트가 Props를
          전달하지 않아도 트리의 하위에 존재하는 모든 컴포넌트에서 데이터를
          가져와 사용할 수 있습니다.
        </p>

        <TicTacToeGame />
      </div>
    </>
  );
}

export default PassingDataDeeplywithContext;
