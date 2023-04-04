import {ChangeEventHandler, KeyboardEventHandler} from 'react';
import {Input} from '@chakra-ui/react';
import {Status} from '../interface/todo';

interface TitleProps {
  description?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  status?: Status;
  type?: 'task' | 'title';
}

function TitleInput(props: TitleProps) {
  const itemStyle = {
    paddingLeft: '10px',
    background: 'transparent',
    fontWeight: props.type === 'title' ? '600' : 'auto',
  };

  return (
    <input
      style={itemStyle}
      value={props.description}
      onKeyDown={props.onKeyDown}
      onChange={props.onChange}
      disabled={props.status === 'completed'}
    />
  );
}

export default TitleInput;
