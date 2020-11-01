import React from 'react';
import './AddTodo.scss';
import { Props } from './AddTodo.interface';

export const AddTodo: React.FC<Props> = ({ onRenderItemInput }) => {
  return (
    <>
      <button className='add-item-circle' onClick={onRenderItemInput} />
    </>
  );
};
