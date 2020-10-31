import React, { FC } from 'react';

export const AddTodo: FC = () => {
  return (
    <form>
      <input type='text' />
      <button type='submit'>Add Todo</button>
    </form>
  );
};
