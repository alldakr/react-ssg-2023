import { useEffect, useRef, useState } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import styles from './TodoList.module.css';
import { debounce } from '@/utils';

TodoList.propTypes = {
  data: arrayOf(
    shape({
      id: string,
      doit: string,
      done: bool,
    })
  ),
  onAdd: func,
  onToggleChecked: func,
};

// 아토믹 디자인
// 상위 컴포넌트(페이지) <-> 하위 컴포넌트(올가니즘)
function TodoList({ data = [], onAdd, onToggleChecked }) {
  // 명령형 제어
  // 리액트 영역(가상 요소) -> 마운트 -> 실제 DOM 영역에서 기능 작동
  // 리액트 팀이 제공하는 방법 (탈출구(escape hatches): Refs 활용)
  const inputRef = useRef(null);

  // 이펙트 훅의 실행 흐름
  // 라이프 사이클(생명 주기)
  // [초기 렌더링]
  // 컴포넌트 렌더링 → DOM 커밋(마운트) → 이펙트 함수 실행
  // [리-렌더링]
  // 컴포넌트 렌더링 → 클린업 함수 실행 → DOM 커밋(변경 감지된 부분만 업데이트) → 이펙트 함수 실행
  useEffect(() => {
    // 리액트 가상 DOM을 해석해서 실제 DOM에 마운트 한 이후 이펙트 콜백 실행
    // 이 공간은 사이드 이펙트 허용 (이벤트 핸들러, useEffect 훅 함수 내부)

    // 이벤트 구독/취소를 위해 이벤트 핸들러 동일 참조
    const handleInput = (e) => {
      console.log(e.currentTarget.value);
    };

    const inputNode = inputRef.current;

    // 이벤트 구독
    inputNode.addEventListener('input', handleInput);

    // 그렇다면 이벤트 구독 취소는 어디서?
    // 이펙트 함수의 반환 값: 클린업(정리) 함수
    // return function cleanup() {
    return () => {
      // 이벤트 구독 취소
      inputNode.removeEventListener('input', handleInput);
    };
  }, []);

  // 선언형 제어(상태)
  const [userInput, setUserInput] = useState('');

  const handleInputTodo = (e) => {
    // [x] e.currentTarget => null
    // [o] e.target => <input />
    setUserInput(e.target.value);
  };

  const resetInputTodo = () => {
    setUserInput('');
  };

  const handleSubmit = (e) => {
    // 브라우저 기본 동작 방지
    e.preventDefault();

    // 선언형 제어
    // 상위 컴포넌트 상태 업데이트
    // onAdd(userInput);
    // 인풋 요소 입력 내용 초기화
    // resetInputTodo();

    // 명령형 제어
    onAdd(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <div className={styles.component}>
      <h4>할 일 추가</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="addTodo" className="sr-only">
          할 일
        </label>
        <input
          // defaultValue={userInput}
          // onChange={debounce(handleInputTodo)}
          ref={inputRef}
          type="text"
          id="addTodo"
          placeholder="예) 아침 조깅"
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>
            <label className={todo.done ? styles.done : ''}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={onToggleChecked(todo.id)}
              />
              {todo.doit}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
