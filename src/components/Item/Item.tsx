import React, { FC } from 'react';
import { Props } from './Item.interface';

export const Item: FC<Props> = ({ todo, onToggleTodo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input
          type='checkbox'
          checked={todo.complete}
          onChange={() => {
            onToggleTodo(todo);
          }}
        />{' '}
        {todo.text}
      </label>
    </li>
  );
}