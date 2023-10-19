import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

// 리액트 요소 생성하는 함수
const headlineElement = createElement(
  // 컴포넌트 타입(component type)
  'h1',
  // 컴포넌트 속성(component props(properties))
  { className: 'greeting' },
  // 전개 구문(spread syntax)
  // ...children
  // [child1, child2, ...]
  createElement('span', {}, '헬로'),
  ' ',
  createElement('span', {}, '리액트!')
);

// 생성된 리액트 요소
// console.log(headlineElement);

// React 요소 트리(element tree) → 웹 앱 (react-dom 패키지)
// const reactDomRoot = ReactDOM.createRoot(actualDomElement)

// 문서에 존재하는 실제 DOM 컨테이너 요소
const rootElement = document.getElementById('root');

// 조건 분기
if (rootElement) {
  // 존재할 경우
  // 리액트 돔의 루트 생성
  const reactDomRoot = createRoot(rootElement);
  // console.log(reactDomRoot); // { render, unmount }
  reactDomRoot.render(headlineElement);
} else {
  // 존재하지 않을 경우
  alert('문서에 #root 요소가 존재하지 않습니다.');
}
