import { useState } from 'react';
import { arrayOf, bool, shape, string } from 'prop-types';
import styles from './TodoList.module.css';

TodoList.propTypes = {
  data: arrayOf(
    shape({
      id: string,
      doit: string,
      done: bool,
    })
  ),
};

function TodoList({ data = [] }) {
  const [todos, setTodos] = useState(data);

  // 사용자 입력 내용 기억 상태
  const [userInput, setUserInput] = useState('');
  const handleInputTodo = (e) => {
    setUserInput(e.currentTarget.value);
  };

  // [미션 1] 사용자 입력 내용을 추가하면 할 일 목록에 추가되도록 설정합니다.
  const handleAddTodo = (e) => {
    // 브라우저 기본 동작 (사용자 입력 내용을 서버에 전송)
    // 브라우저에서 처리되는 이벤트 객체
    // 리액트 합성 이벤트 사용 (네이티브 이벤트가 아님)
    // console.log(e);
    // 브라우저의 기본 동작 방지
    e.preventDefault();

    // 배열 데이터 업데이트
    // 불변(immutable) 데이터 방식으로 변경
    // 추가(add): 전개 구문(복사와 새 아이템 할당)
    const newTodo = {
      id: `todo-${todos.length + 1}`,
      doit: userInput,
      done: false,
    };

    setTodos([newTodo, ...todos]);
    setUserInput('');
  };

  // [미션 2] 사용자가 할 일을 체크 또는 체크 해제하면 상태를 변경합니다.
  // ...

  return (
    <div className={styles.component}>
      <h4>할 일 추가</h4>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="addTodo" className="sr-only">
          할 일
        </label>
        <input
          value={userInput}
          onChange={handleInputTodo}
          type="text"
          id="addTodo"
          placeholder="예) 아침 조깅"
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <label className={todo.done ? styles.done : ''}>
              <input type="checkbox" checked={todo.done} readOnly />
              {todo.doit}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
