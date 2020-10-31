import React, { useState } from 'react';
import { Todos } from './components/Todos/Todos';
import { Todo } from './components/Todos/Todos.interface';

const initialState: Todo[] = [
  {
    text: 'Pick up groceries',
    complete: true,
  },
  {
    text: 'Go for a run',
    complete: false,
  },
];

function App() {

  const [todos, setTodos] = useState(initialState);

  const onToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <Todos todos={todos} onToggleTodo={onToggleTodo} />
    </>
  );
}

export default App;
