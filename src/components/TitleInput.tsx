import {ChangeEventHandler} from 'react';
import {Status} from '../interface/todo';

interface TitleProps {
  title?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  status?: Status;
}

function TitleInput(props: TitleProps) {
  const itemStyle = {
    paddingLeft: '10px',
    width: '90%',
    background: 'transparent',
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
