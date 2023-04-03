import {ChangeEventHandler, KeyboardEventHandler} from 'react';

interface TodoItemProps {
  description?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
  completed?: boolean;
}

function TodoDescription(props: TodoItemProps) {
  return (
    <textarea
      value={props.description}
      onKeyDown={props.onKeyDown}
      onChange={props.onChange}
      rows={1}
      placeholder="Add new todo..."
      disabled={props.completed}
    />
  );
}

export default TodoDescription;
