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
  const [todos] = useState(data);

  return (
    <div className={styles.component}>
      <h4>할 일 추가</h4>
      <form>
        <label htmlFor="addTodo" className="sr-only">
          할 일
        </label>
        <input type="text" id="addTodo" placeholder="예) 아침 조깅" />
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
