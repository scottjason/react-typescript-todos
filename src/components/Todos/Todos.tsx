import React, { FC } from 'react';
import { Item } from '../Item/Item';
import { Props } from './Todos.interface';

export const Todos: FC<Props> = ({ todos, onToggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Item key={todo.text} todo={todo} onToggleTodo={onToggleTodo} />
      ))}
    </ul>
  );
};
