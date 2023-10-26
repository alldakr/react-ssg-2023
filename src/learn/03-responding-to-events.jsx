import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import TodoList from './components/TodoList';
import EventPropagation from './components/EventPropagation';

function RespondingToEvents() {
  const [todos, setTodos] = useState([
    { id: 'todo-1', doit: '주간 독서', done: false },
    { id: 'todo-2', doit: '주말 자전거 트래킹', done: true },
  ]);

  const handleAddTodo = (userInput) => (e) => {
    e.preventDefault();

    const newTodo = {
      id: `todo-${todos.length + 1}`,
      doit: userInput,
      done: false,
    };

    setTodos([newTodo, ...todos]);
    // setUserInput('');
  };

  const handleToggleCheckedTodo = (todoId) => (e) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, done: e.currentTarget.checked };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
      <Helmet>
        <title>Responding to Events</title>
      </Helmet>
      <div className="prose">
        <h3>이벤트 응답</h3>
        <p>
          이벤트 핸들러는 사용자와의 상호작용에 대한 응답으로 실행되는 콜백
          함수입니다.
        </p>

        {/* 
          이벤트 응답으로 사용자와 상호작용하는 TodoList를 구현합니다. 
          - 이벤트 핸들러에서 속성(prop) 읽기
          - 이벤트 핸들러를 속성으로 전달
          - 이벤트 핸들러 속성 이름 지정
          - 이벤트 기본 동작 방지(prevent event)
        */}
        <TodoList
          data={todos}
          onAdd={handleAddTodo}
          onToggleChecked={handleToggleCheckedTodo}
        />

        {/* 
          이벤트 전파에 대해 이해하고 처리하는 방법을 학습합니다.
          - 이벤트 전파
          - 이벤트 전파 중지(stop propagation)
          - 이벤트 전파 대안: 핸들러 전달
        */}
        <EventPropagation />
      </div>
    </>
  );
}

export default RespondingToEvents;
