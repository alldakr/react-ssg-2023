// 리액트 엘리먼트(요소)를 반환하는 함수
// 함수는 재사용 목적으로 사용된다.
// 일반 함수 (전달 인수(arguments)를 받아 재사용)
// 리액트 함수 컴포넌트 (속성(props)을 전달 받아 재사용)

import './Button.css';

function Button(props /* { title, children } */) {
  return (
    <button type="button" className="Button" title={props.title}>
      {props.children}
    </button>
  );
}

export default Button;
