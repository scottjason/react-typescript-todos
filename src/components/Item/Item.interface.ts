import { onToggleTodo } from './Item.types';

export interface Todo {
  text: string;
  complete: boolean;
}

export interface Props {
  todo: Todo;
  onToggleTodo: onToggleTodo;
}
