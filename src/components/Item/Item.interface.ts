import { Todo } from '../../interface';

export interface Props {
  todo: Todo;
  shouldRenderItemInput: boolean;
  onToggleTodo: (selectedTodo: Todo) => void;
}
