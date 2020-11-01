import { Todo } from '../../interface';

export interface Props {
  todos: Todo[];
  shouldRenderItemInput: boolean;
  onToggleTodo: (selectedTodo: Todo) => void;
}
