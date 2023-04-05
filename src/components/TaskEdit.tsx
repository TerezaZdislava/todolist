import {IconButton, Select, Text, Textarea, Input} from '@chakra-ui/react';
import {ReactComponent as DeleteIcon} from '../assets/icons/delete.svg';
import {ChangeEventHandler, MouseEventHandler} from 'react';
import withPopover from './withPopover';
import {Todo} from '../interface/todo';

interface Props {
  allDone?: MouseEventHandler<HTMLButtonElement>;
  delete?: MouseEventHandler<HTMLButtonElement>;
  onTitleChange?: ChangeEventHandler<HTMLInputElement>;
  onDescriptionChange?: ChangeEventHandler<HTMLTextAreaElement>;
  changePriority?: ChangeEventHandler<HTMLSelectElement>;
  // priority?: boolean;
  task?: Todo;
}

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
  marginTop: '5px',
};

function TaskEdit(props: Props) {
  return (
    <div>
      <Text mb="4">Date of creation: {props.task?.timeCreated}</Text>
      <span>Title</span>
      <Input mt="1" mb="4" onChange={props.onTitleChange} defaultValue={props.task?.title} />
      <span>Description</span>
      <Textarea
        mt="1"
        mb="4"
        defaultValue={props.task?.description}
        onChange={props.onDescriptionChange}
      />
      <span>Priority</span>
      <Select mt="1" mb="4" placeholder={props.task?.priority} onChange={props.changePriority}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </Select>
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
