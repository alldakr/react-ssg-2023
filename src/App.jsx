import Button from './button/Button';
import LoadingScreen from './loading-screen/LoadingScreen';

function App() {
  // 조건 변수
  // 로딩중 상태인가?
  const isLoading = !true;

  // 조건부 렌더링
  // 문 또는 식을 사용할 수 있다.
  // if (isLoading) {
  //   return <LoadingScreen />;
  // }

  // JSX
  // JSX(식) 안에서 조건 처리
  // 조건 표현식
  // - [x] 논리 연산자(&&, ||)
  // - [x] 3항 연산자(?:)
  // - [ ] null 병합 연산자 (??)
  // - [ ] 옵셔널 체이닝 (?.)
  return (
    <div>
      <p>상태 메시지: {isLoading ? '로딩 중...' : '로딩 완료'}</p>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="App">
          <h1 className="Greeting">
            <span className="message">헬로!</span>{' '}
            <span className="libraryName">리액트</span>
          </h1>
          <Button title="getting started">시작하기</Button>
          <Button title="installing packages">패키지 설치</Button>
        </div>
      )}
    </div>
  );
}

export default App;
