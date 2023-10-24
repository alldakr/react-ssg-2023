// 함수형 프로그래밍 (수학적 사고)
// - 순수 함수 (동일 입력 → 동일 출력)
// - 사이드 이펙트 (부수 효과)

/**
 * React는 컴포넌트를 항상 순수 함수로 간주합니다.
 * https://react.dev/learn/keeping-components-pure
 *
 * - 순수 함수란? 동일 입력 → 동일 출력
 * - 입력은 항상 "읽기 전용" (React 데이터 : [props], state, context)
 * - 무언가 변경하려면 변수 대신 "상태" 사용 (props, [state], context)
 * - StrictMode는 2번 호출하여 순수 함수 (컴포넌트) 체크
 */

import { Helmet } from 'react-helmet-async';
import Stack from './components/Stack';
import { useState } from 'react';
import { Button } from '@/components';
import { number } from 'prop-types';

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
          <PureComponent renderCount={1} />
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

// 아래 변수를 함수 컴포넌트 외부에 정의하여 문제를 확인합니다.
let renderCount = 0; // 0, 1

/* 불순 함수 */
function ImpureComponent() {
  // 컴포넌트 몸체 안에 사이드 이펙트 코드를 작성하면 안됩니다.
  // - 컴포넌트 외부의 변수 조작

  return (
    <div>
      <h4>순수하지 않은 컴포넌트</h4>
      <output className="output">렌더 카운트: {(renderCount += 1)}</output>
    </div>
  );
}

PureComponent.propTypes = {
  renderCount: number,
};

/* 순수 함수 */
function PureComponent({ renderCount = 0 }) {
  // 리액트 컴포넌트 몸체는 순수하게 렌더링 프로세스 코드만 위치해야 합니다.
  // - 예측 가능 및 오류 감지 용이

  // 컴포넌트 속성(props, readOnly)으로 데이터를 전달받는 구조로 작성하는 것이 순수 함수를 유지하는 방법입니다.
  // props를 사용해 문제를 해결해봅니다.
  // let renderCount = 0;

  return (
    <div>
      <h4>순수한 컴포넌트</h4>
      <output className="output">렌더 카운트: {renderCount}</output>
    </div>
  );
}

/* 로컬 뮤테이션 */

function LocalMutation() {
  // 순수 함수에서 문제가되는 것은 렌더링 하는 동안 기존 변수를 변경한다는 점입니다.
  // 이처럼 기존 값을 변경하는 것을 뮤테이션(mutation)이라고 합니다.
  //
  // 일반적으로 컴포넌트 외부 또는 전달받은 입력 값을 수정하는 것은 허용되지 않지만,
  // 렌더링되는 동안 함수 내부의 지역 변수를 변경하는 것은 문제가 되지 않습니다.
  // 즉, 로컬 뮤테이션은 허용됩니다.
  const list = Array(2).fill(null); // [null, null]

  // 아래 코드는 외부의 변수를 뮤테이션하므로 리액트에서 문제를 유발합니다.
  // 로컬 뮤테이션을 사용해 문제를 해결해보세요.
  list.push(null); // [null, null, null]

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

// 함수 컴포넌트 몸체 밖에 있는 데이터를 수정하면?
// 뮤테이션 (순수함이 깨졌다)
const externalList = ['⭐️'];

// 서버 데이터 요청
// 엔트리 포인트
const API = 'https://y-movies.pockethost.io/api';
const API_MOVIES = `${API}/collections/movies/records`;

function SideEffects() {
  // 서버 데이터 요청/응답 관리
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [data, setData] = useState(null); // null or [{id,title,photo,...}, ...]
  const [error, setError] = useState(null); // null or Error Object

  // 함수 몸체: 순수함을 유지해야 하는 공간(영역)

  // 사이드 이펙트 처리(기능, 함수)
  const handleRequestMovieData = async () => {
    setStatus('loading');
    try {
      // 사이트 이펙트를 처리해도 무방한 공간(영역)
      const response = await fetch(
        `${API_MOVIES}?page=1&perPage=10&sort=-release`
      );
      const data = await response.json(); //
      setStatus('success');
      setData(data);
    } catch (error) {
      setError(error);
      setStatus('error');
    }
  };

  // 카운트 상태 관리

  const [count, setCount] = useState(0);

  // 이벤트 함수는 순수할 필요가 없습니다.
  // 이밴트 콜백 함수 안에서는 리액트 렌더링과 관련 없는 것을 수행해도 무방합니다.
  // 아래 증감 이벤트 핸들러 함수가 실행될 때마다 사이트 이펙트 코드가 실행되도록 작성해봅니다.

  const decrementCount = () => {
    externalList.pop();
    console.log(externalList);
    setCount(count - 1);
  };

  const incrementCount = () => {
    externalList.push('⭐️');
    console.log(externalList);
    setCount(count + 1);
  };

  if (status === 'loading') {
    return <div role="alert">무비 데이터 요청 중...</div>;
  }

  if (status === 'error') {
    return <div role="alert">{error.toString()}</div>;
  }

  return (
    <>
      <Stack gap={8}>
        <div>
          <Button onClick={handleRequestMovieData}>영화 정보 요청</Button>
          <ul>
            {data?.items?.map((movieItem) => (
              <li key={movieItem.id}>{movieItem.title}</li>
            ))}
          </ul>
        </div>
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
