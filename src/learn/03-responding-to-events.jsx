import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import TodoList from './components/TodoList';
import EventPropagation from './components/EventPropagation';

// 상태 끌어올리기 이후, 다뤄야 할 주제는 다음과 같습니다.
// - [x] 하위 컴포넌트의 상태 변경 방법
// - [x] 디바운싱 또는 쓰로틀링 (불필요한 리-렌더링 개선)
// - [x] React를 사용하지 않고 "할 일 추가"하는 방법 (답변: 선언형 프로그래밍 대신에 명령형 프로그래밍을 하면 됨) + 고차 컴포넌트(HOF, HOC)
// - [ ] "할 일 삭제" 기능 추가

function RespondingToEvents() {
  const [todos, setTodos] = useState([
    { id: 'todo-1', doit: '주간 독서', done: false },
    { id: 'todo-2', doit: '주말 자전거 트래킹', done: true },
  ]);

  const handleAddTodo = (userInput) => {
    const newTodo = {
      id: `todo-${todos.length + 1}`,
      doit: userInput,
      done: false,
    };

    setTodos([newTodo, ...todos]);
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
