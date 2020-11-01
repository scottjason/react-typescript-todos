import React from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { Props } from './Item.interface';
import './Item.scss';

export const Item: React.FC<Props> = ({ todo, shouldRenderItemInput, onToggleTodo }) => {
  return (
    <>
      <li className='item-container'>
        <label className='label-wrap'>
          <p className='todo'>{todo.text}</p>
          <input
            type='checkbox'
            checked={todo.complete}
            onChange={() => {
              onToggleTodo(todo);
            }}
          />
          {todo.complete && (
            <span className='complete'>
              <IoIosCheckmarkCircleOutline />
            </span>
          )}
          {!todo.complete && <span className='checkmark'></span>}
        </label>
      </li>
      {shouldRenderItemInput && <input type='text' className='item-input' />}
    </>
  );
};
