import {IconButton, Text} from '@chakra-ui/react';
import {ReactComponent as DeleteIcon} from '../assets/icons/delete.svg';
import {ReactComponent as CheckIconn} from '../assets/icons/check.svg';
import {MouseEventHandler} from 'react';
import withPopover from './withPopover';

interface Props {
  allDone?: MouseEventHandler<HTMLButtonElement>;
  delete?: MouseEventHandler<HTMLButtonElement>;
}

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
};

function CardEdit(props: Props) {
  return (
    <div>
      <div style={rowStyle}>
        <IconButton
          size="sm"
          mr="2"
          aria-label="done"
          icon={<CheckIconn />}
          variant="primary"
          onClick={props.allDone}
        />
        <Text>Mark all done</Text>
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
        <Text>Delete list</Text>
      </div>
    </div>
  );
}

export default withPopover(CardEdit);
