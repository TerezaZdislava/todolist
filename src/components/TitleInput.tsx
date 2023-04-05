import {ChangeEventHandler} from 'react';
import {Status} from '../interface/todo';

interface TitleProps {
  title?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  status?: Status;
  type?: 'task' | 'title';
}

function TitleInput(props: TitleProps) {
  const itemStyle = {
    paddingLeft: '10px',
    width: '90%',
    background: 'transparent',
    fontWeight: props.type === 'title' ? '600' : 'auto',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  } as React.CSSProperties;

  return (
    <input
      type="text"
      style={itemStyle}
      value={props.title}
      onChange={props.onChange}
      disabled={props.status === 'completed'}
    />
  );
}

export default TitleInput;
