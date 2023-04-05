import {IconButton, Text, Switch, Textarea, Input} from '@chakra-ui/react';
import {ReactComponent as DeleteIcon} from '../assets/icons/delete.svg';
import {ChangeEventHandler, MouseEventHandler} from 'react';
import withPopover from './withPopover';
import {Todo} from '../interface/todo';

interface Props {
  allDone?: MouseEventHandler<HTMLButtonElement>;
  delete?: MouseEventHandler<HTMLButtonElement>;
  onTitleChange?: ChangeEventHandler<HTMLInputElement>;
  onDescriptionChange?: ChangeEventHandler<HTMLTextAreaElement>;
  changePriority?: any;
  priority?: boolean;
  task?: Todo;
}

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
};

function TaskEdit(props: Props) {
  return (
    <div>
      <Input mb="4" onChange={props.onTitleChange} defaultValue={props.task?.title} />
      <Textarea
        mb="4"
        defaultValue={props.task?.description}
        onChange={props.onDescriptionChange}
      />
      <div style={rowStyle}>
        <Switch
          size="sm"
          colorScheme="red"
          defaultChecked={props.task?.priority}
          onChange={props.changePriority}
          style={{marginRight: '5px'}}
        />
        <Text ml="2">Change priority</Text>
      </div>
      <div style={rowStyle}>
        <IconButton
          size="sm"
          mr="2"
          aria-label="delete"
          icon={<DeleteIcon />}
          variant="ghost"
          onClick={props.delete}
        />
        <Text>Delete task</Text>
      </div>
    </div>
  );
}

export default withPopover(TaskEdit);
