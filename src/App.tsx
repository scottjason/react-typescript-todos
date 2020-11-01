import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todos } from './components/Todos/Todos';
import { AddTodo } from './components/AddTodo/AddTodo';
import { Todo } from './interface';
import './App.scss';

const initialState: Todo[] = [
  {
    id: uuidv4(),
    text: 'Pick up groceries',
    complete: true,
  },
  {
    id: uuidv4(),
    text: 'Go for a run',
    complete: false,
  },
];

function App() {

  const [todos, setTodos] = useState(initialState);
  const [shouldRenderItemInput, rederItemInput] = useState(false);

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

  const onRenderItemInput = () => {
    rederItemInput(true);
  }

  return (
    <div className='app-container'>
      <Todos
        todos={todos}
        onToggleTodo={onToggleTodo}
        shouldRenderItemInput={shouldRenderItemInput}
      />
      <AddTodo onRenderItemInput={onRenderItemInput} />
    </div>
  );
}

export default App;
