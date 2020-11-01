import React from 'react';
import { Item } from '../Item/Item';
import { Props } from './Todos.interface';
import './Todos.scss';

export const Todos: React.FC<Props> = ({ todos, shouldRenderItemInput, onToggleTodo }) => {
  return (
    <ul className='todos-container'>
      {todos.map((todo, idx) => (
        <Item
          key={todo.text}
          todo={todo}
          onToggleTodo={onToggleTodo}
          shouldRenderItemInput={
            idx === todos.length - 1 ? shouldRenderItemInput : false
          }
        />
      ))}
    </ul>
  );
};
