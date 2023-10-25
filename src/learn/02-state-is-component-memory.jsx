import { Helmet } from 'react-helmet-async';
import UnderstaindUseStateHook from './components/UnderstandingUseStateHook';
import ReadWriteInLocalStorage from './components/ReadWriteInLocalStorage';

function StateIsComponentMemory() {
  return (
    <>
      <Helmet>
        <title>State is Component Memory</title>
      </Helmet>
      <div className="prose">
        <h3>상태 = 컴퍼넌트 메모리</h3>
        <p>
          컴포넌트는 현재 입력 값, 현재 콘텐츠, 장바구니에 담긴 상품 등을
          “기억(memory)”해야 합니다.
          <br />
          React에서는 이러한 종료의 컴포넌트 별 메모리를 상태(state)라고 합니다.
        </p>

        <pre className="pre" style={{ marginBlockStart: 4 }}>
          <code>const [state, setter] = React.useState(initialValue)</code>
          <code>const [state, setter] = React.useState(initiailizer)</code>
        </pre>

        <UnderstaindUseStateHook />
        <ReadWriteInLocalStorage />
      </div>
    </>
  );
}

export default StateIsComponentMemory;
