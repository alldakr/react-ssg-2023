import { Icon, Button, LoadingScreen, ToggleButton } from '@/components';

function App() {
  const isLoading = !true;

  return (
    <div>
      <Icon mode="secondary" />
      <Icon type="minus" />
      <Icon size={20} />
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
