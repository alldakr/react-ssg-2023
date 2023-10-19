import Button from './button/Button';

function App() {
  return (
    <div className="App">
      <h1 className="Greeting">
        <span className="message">헬로!</span>{' '}
        <span className="libraryName">리액트</span>
      </h1>
      <Button title="getting started">시작하기</Button>
      <Button title="installing packages">패키지 설치</Button>
    </div>
  );
}

export default App;
