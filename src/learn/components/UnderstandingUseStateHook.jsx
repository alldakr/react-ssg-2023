import { Button, IconButton } from '@/components';
import { getJSONString } from '@/utils';
import useReRender from '../hooks/useReRender';

/* useState 훅 이해를 위해 작성된 임의의 코드 --------------------------------------------- */
// 참고: https://bit.ly/4719HUO (원문) / https://bit.ly/3QtGfS2 (번역 및 예제 포함)

// [[상태, 상태 업데이트 함수]] 집합
const stateAndSetters = [];

// 커서 (컴포넌트가 실행된 순서)
let cursor = 0;

// 상태 업데이트 함수 생성 함수 (JavaScript 클로저)
function createSetter(cursor) {
  // 상태 업데이트 함수 반환
  return function setterWithCursor(newValue) {
    // 현재 cursor 위치의 상태 값을 새로운 값으로 변경
    stateAndSetters[cursor][0] = newValue;
  };
}

// 임의로 작성된 useState 훅 (특별한 함수: 함수 이름이 use로 시작)
// 훅의 작성 규칙
// 1. 오직 함수 컴포넌트와 훅 함수 내부에서만 사용 가능
// 2. 조건, 반복 문 안에서 사용할 수 없음
function useMyState(initialValue /* 초깃값 */) {
  // setters.length와 cursor 값이 동일한 경우
  if (stateAndSetters.length === cursor) {
    // 해당 cursor에서 useState 훅이 처음 실행될 때
    // 상태 및 상태 업데이트 함수 설정
    // - states에 initialValue를 추가
    // - setters 집합에 상태 업데이트 함수를 생성해 설정
    stateAndSetters.push([initialValue, createSetter(cursor)]);
  }

  // 해당 cursor의 상태, 상태 업데이트 함수 반환
  const [state, setter] = stateAndSetters[cursor];

  // 로그
  // console.log(cursor, [state, setter]);

  // cursor 값 변경
  cursor++;

  // useState 훅의 반환 값: [상태, 상태 업데이트 함수]
  return [state, setter];
}

/* -------------------------------------------------------------------------- */

function UnderstaindUseStateHook() {
  // React 컴포넌트 리-렌더 훅 (유틸리티 함수 반환)
  // - React 뷰 업데이트의 내부 리-렌더링 구조까지 구현하는 것은
  //   매우 복잡하므로 리-렌더링(컴포넌트 재 실행)을 위해 활용
  const reRender = useReRender();

  // cursor 초기화
  // - 어디까지나 useState 훅의 작동 원리를 이해하기 위한 목적으로
  //   작성된 코드이므로 현재 파일 컨텍스트 내부에서만 작동하기 때문
  // - 컴포넌트가 리-렌더 될 때 순서가 중요!
  cursor = 0;

  // React.useState 훅이 아닌, 임의로 작성된 useMyState 훅 사용
  const [count, setCount] = useMyState(0); // cursor: 0
  const handleCount = () => {
    setCount(count + 1);
    reRender(); // 트리거 렌더
  };

  const [stars, setStars] = useMyState('⭐️'); // cursor: 1
  const handleStars = () => {
    setStars(stars + ' ⭐️');
    reRender(); // 트리거 렌더
  };

  // 컴포넌트 상태 초기화 함수
  const handleReset = () => {
    // [미션 1] 컴포넌트 초기화 로직을 작성합니다.
    // ...
    stateAndSetters.length = 0;
    cursor = 0;
    reRender(); // 렌더 트리거
  };

  return (
    <>
      <h4
        style={{
          fontSize: 18,
          marginBlockStart: 4,
          marginBlockEnd: 8,
          color: 'var(--primary--500)',
        }}
      >
        useState 훅의 작동 원리
      </h4>
      <p>
        useState 훅은 마법이 아니라, 배열을 활용하는 데 그 비밀이 있습니다.
        <br />
        useState 훅에 대한 이해를 위해 임의로 useMyState 훅을 만들어 작동 원리에
        대해 이해해봅니다.
      </p>
      <p>
        아래 버튼을 클릭하면 useMyState 훅으로 관리되는 상태에 따라 뷰(view)가
        업데이트 됩니다.
      </p>

      <Button
        type="button"
        onClick={handleReset}
        // [미션 2 초기 상태인 경우, 버튼이 비활성화되도록 설정합니다.
        disabled={count === 0 && stars === '⭐️'}
      >
        컴포넌트 초기화
      </Button>

      <div
        style={{
          marginBlockStart: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 4,
        }}
      >
        <Button onClick={handleCount}>{count}</Button>
        <IconButton
          size="md"
          rounded="lg"
          onClick={handleStars}
          style={{
            translate: '2px 0',
            paddingBlock: '1em',
          }}
        >
          {stars}
        </IconButton>
      </div>
      <pre className="pre">
        <span>상태를 관리하는 배열 구조</span>
        <code>stateAndSetters = {getJSONString(stateAndSetters)}</code>
      </pre>
    </>
  );
}

export default UnderstaindUseStateHook;
