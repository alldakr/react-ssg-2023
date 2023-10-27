import { useState } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import styles from './TodoList.module.css';

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
  const [userInput, setUserInput] = useState('');

  const handleInputTodo = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const resetInputTodo = () => {
    setUserInput('');
  };

  const handleSubmit = (e) => {
    // 브라우저 기본 동작 방지
    e.preventDefault();
    // 상위 컴포넌트 상태 업데이트
    onAdd(userInput);
    // 인풋 요소 입력 내용 초기화
    resetInputTodo();
  };

  return (
    <div className={styles.component}>
      <h4>할 일 추가</h4>
      <form onSubmit={handleSubmit}>
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
