import Button from './button/Button';
import LoadingScreen from './loading-screen/LoadingScreen';
import { getPublic } from './utils';

function App() {
  return (
    <div className="App">
      <h1 className="Greeting">
        <span className="message">헬로!</span>{' '}
        <span className="libraryName">리액트</span>
      </h1>
      <Button title="getting started">시작하기</Button>
      <Button title="installing packages">패키지 설치</Button>
      {/* 정적 에셋 */}
      <img src={getPublic('loading-screen.svg')} alt="로딩 중..." />
      {/* 동적 에셋을 가져오는 컴포넌트 */}
      <LoadingScreen />
    </div>
  );
}

export default App;
