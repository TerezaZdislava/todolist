import {ChangeEventHandler, KeyboardEventHandler} from 'react';
import {Input} from '@chakra-ui/react';
import {Status} from '../interface/todo';

interface TodoDescProps {
  description?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  status?: Status;
}

function TodoDescription(props: TodoDescProps) {
  return (
    <Input
      style={{paddingLeft: '40px'}}
      value={props.description}
      onKeyDown={props.onKeyDown}
      onChange={props.onChange}
      disabled={props.status === 'completed'}
    />
  );
}

export default TodoDescription;
