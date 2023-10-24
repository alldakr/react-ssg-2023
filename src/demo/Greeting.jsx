export function Greeting(props) {
  return (
    <h1 className="Greeting" {...props}>
      <span className="message">헬로!</span>{' '}
      <span className="libraryName">리액트</span>
    </h1>
  );
}
