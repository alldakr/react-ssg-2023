import Button from './button/Button';
import LoadingScreen from './loading-screen/LoadingScreen';
import ToggleButton from './toggleButton/ToggleButton';

function App() {
  const isLoading = !true;

  return (
    <div>
      <p hidden>상태 메시지: {isLoading ? '로딩 중...' : '로딩 완료'}</p>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="App">
          <h1 className="Greeting">
            <span className="message">헬로!</span>{' '}
            <span className="libraryName">리액트</span>
          </h1>

          <div hidden>
            <Button title="getting started">시작하기</Button>
            <Button title="installing packages">패키지 설치</Button>
          </div>

          <div>
            <ToggleButton on />
            <ToggleButton />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
