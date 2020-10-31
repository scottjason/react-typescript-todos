import { onToggleTodo } from './Todos.types'

export interface Todo {
  text: string;
  complete: boolean;
}

export interface Props {
  todos: Todo[];
  onToggleTodo: onToggleTodo;
}
