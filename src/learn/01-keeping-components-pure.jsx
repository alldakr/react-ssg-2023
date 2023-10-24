/**
 * React는 컴포넌트를 항상 순수 함수로 간주합니다.
 * https://react.dev/learn/keeping-components-pure
 */

import { Helmet } from 'react-helmet-async';
import Stack from './components/Stack';

function KeepingComponentsPure() {
  return (
    <>
      <Helmet>
        <title>Keeping Components Pure</title>
      </Helmet>
      <div className="prose">
        <h3>리액트 컴포넌트 = 순수 함수</h3>
        <Stack vertical gap={32}>
          <ImpureComponent />
          <PureComponent />
        </Stack>
      </div>
    </>
  );
}

function ImpureComponent() {
  // 컴포넌트 몸체 안에 사이드 이펙트 코드를 작성하면 안됩니다.
  // - 컴포넌트 외부의 변수 조작

  let renderCount = 0;

  return (
    <div>
      <h4>순수하지 않은 컴포넌트</h4>
      <output className="output">렌더 카운트: {renderCount}</output>
    </div>
  );
}

function PureComponent() {
  // 리액트 컴포넌트 몸체는 순수하게 렌더링 프로세스 코드만 위치해야 합니다.
  // - 예측 가능 및 오류 감지 용이

  let renderCount = 0;

  return (
    <div>
      <h4>순수한 컴포넌트</h4>
      <output className="output">렌더 카운트: {renderCount}</output>
    </div>
  );
}

export default KeepingComponentsPure;
