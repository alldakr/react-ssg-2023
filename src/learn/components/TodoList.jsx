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

function TodoList({ data = [], onAdd, onToggleChecked }) {
  // 사용자 입력 내용 기억 상태
  const [userInput, setUserInput] = useState('');
  const handleInputTodo = (e) => {
    setUserInput(e.currentTarget.value);
  };

  return (
    <div className={styles.component}>
      <h4>할 일 추가</h4>
      <form onSubmit={onAdd(userInput)}>
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
