/**
 * React는 컴포넌트를 항상 순수 함수로 간주합니다.
 * https://react.dev/learn/keeping-components-pure
 *
 * - 순수 함수란? 동일 입력 → 동일 출력
 * - 입력은 항상 "읽기 전용"
 * - 무언가 변경하려면 변수 대신 "상태" 사용
 * - StrictMode는 2번 호출하여 순수 함수 체크
 */

import { Helmet } from 'react-helmet-async';
import Stack from './components/Stack';
import { useState } from 'react';
import { Button } from '@/components';

function KeepingComponentsPure() {
  return (
    <>
      <Helmet>
        <title>Keeping Components Pure</title>
      </Helmet>
      <div className="prose">
        <h3>리액트 컴포넌트 = 순수 함수</h3>
        <p>리액트는 컴포넌트를 항상 순수하다고 간주합니다.</p>

        <Stack vertical gap={32} style={{ marginBottom: 40 }}>
          <ImpureComponent />
          <PureComponent />
          <LocalMutation />
        </Stack>

        <h3>이벤트 핸들러 != 순수 함수</h3>
        <p>
          이벤트 콜백 함수는 리액트 렌더링과 상관이 없으므로 순수할 필요가
          없습니다.
        </p>
        <SideEffects />
      </div>
    </>
  );
}

export default KeepingComponentsPure;

/* 불순 함수 */
function ImpureComponent() {
  // 컴포넌트 몸체 안에 사이드 이펙트 코드를 작성하면 안됩니다.
  // - 컴포넌트 외부의 변수 조작

  // 아래 변수를 함수 컴포넌트 외부에 정의하여 문제를 확인합니다.
  let renderCount = 0;

  return (
    <div>
      <h4>순수하지 않은 컴포넌트</h4>
      <output className="output">렌더 카운트: {(renderCount += 1)}</output>
    </div>
  );
}

/* 순수 함수 */
function PureComponent() {
  // 리액트 컴포넌트 몸체는 순수하게 렌더링 프로세스 코드만 위치해야 합니다.
  // - 예측 가능 및 오류 감지 용이

  // 컴포넌트 속성(props)으로 데이터를 전달받는 구조로 작성하는 것이 순수 함수를 유지하는 방법입니다.
  // props를 사용해 문제를 해결해봅니다.
  let renderCount = 0;

  return (
    <div>
      <h4>순수한 컴포넌트</h4>
      <output className="output">렌더 카운트: {(renderCount += 1)}</output>
    </div>
  );
}

/* 로컬 뮤테이션 */
const list = Array(2).fill(null);

function LocalMutation() {
  // 순수 함수에서 문제가되는 것은 렌더링 하는 동안 기존 변수를 변경한다는 점입니다.
  // 이처럼 기존 값을 변경하는 것을 뮤테이션(mutation)이라고 합니다.
  //
  // 일반적으로 컴포넌트 외부 또는 전달받은 입력 값을 수정하는 것은 허용되지 않지만,
  // 렌더링되는 동안 함수 내부의 지역 변수를 변경하는 것은 문제가 되지 않습니다.
  // 즉, 로컬 뮤테이션은 허용됩니다.

  // 아래 코드는 외부의 변수를 뮤테이션하므로 리액트에서 문제를 유발합니다.
  // 로컬 뮤테이션을 사용해 문제를 해결해보세요.
  list.push(null);

  return (
    <div>
      <h4>로컬 뮤케이션 허용</h4>
      <Stack vertical gap={12}>
        {list.map((_, i) => (
          <output
            key={i}
            className="output"
            style={{ alignSelf: 'flex-start' }}
          >
            리핏 카운트: {i + 1}
          </output>
        ))}
      </Stack>
    </div>
  );
}

/* 이벤트 핸들러 */
const buttonStyle = { color: '#80b6c8', borderColor: 'currentColor' };

const externalList = ['⭐️'];

function SideEffects() {
  const [count] = useState(0);

  // 이벤트 함수는 순수할 필요가 없습니다.
  // 이밴트 콜백 함수 안에서는 리액트 렌더링과 관련 없는 것을 수행해도 무방합니다.
  // 아래 증감 이벤트 핸들러 함수가 실행될 때마다 사이트 이펙트 코드가 실행되도록 작성해봅니다.

  const decrementCount = () => {
    externalList.pop();
    console.log(externalList);
  };

  const incrementCount = () => {
    externalList.push('⭐️');
    console.log(externalList);
  };

  return (
    <>
      <Stack gap={8}>
        <Button onClick={decrementCount} style={buttonStyle}>
          -1
        </Button>
        <output className="output">카운트: {count}</output>
        <Button onClick={incrementCount} style={buttonStyle}>
          +1
        </Button>
      </Stack>
      <ul
        style={{
          display: 'flex',
          marginTop: 20,
          listStyle: 'none',
          paddingLeft: 0,
          fontSize: 28,
          gap: 8,
        }}
      >
        {externalList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
}
