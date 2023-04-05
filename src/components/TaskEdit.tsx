import {IconButton, Text, Switch} from '@chakra-ui/react';
import {ReactComponent as DeleteIcon} from '../assets/icons/delete.svg';
import {MouseEventHandler} from 'react';
import withPopover from './withPopover';

interface Props {
  allDone?: MouseEventHandler<HTMLButtonElement>;
  delete?: MouseEventHandler<HTMLButtonElement>;
  changePriority?: any;
  priority?: boolean;
}

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
};

function TaskEdit(props: Props) {
  return (
    <div>
      <div style={rowStyle}>
        <Switch
          size="sm"
          colorScheme="red"
          defaultChecked={props.priority}
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
          variant="primary"
          onClick={props.delete}
        />
        <Text>Delete task</Text>
      </div>
    </div>
  );
}

export default withPopover(TaskEdit);
