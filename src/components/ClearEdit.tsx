import {IconButton, Text} from '@chakra-ui/react';
import {ReactComponent as CheckIcon} from '../assets/icons/check.svg';
import {ReactComponent as MenuIcon} from '../assets/icons/menu.svg';
import {MouseEventHandler} from 'react';
import withPopover from './withPopover';

interface Props {
  clearDone?: MouseEventHandler<HTMLButtonElement>;
  clearAll?: MouseEventHandler<HTMLButtonElement>;
}

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
};

function ClearEdit(props: Props) {
  return (
    <div>
      <div style={rowStyle}>
        <IconButton
          size="sm"
          mr="2"
          aria-label="done"
          icon={<MenuIcon />}
          variant="ghost"
          onClick={props.clearAll}
        />
        <Text>Clear all</Text>
      </div>
      <div style={rowStyle}>
        <IconButton
          size="sm"
          mr="2"
          aria-label="done"
          icon={<CheckIcon />}
          variant="ghost"
          onClick={props.clearDone}
        />
        <Text>Clear all done tasks</Text>
      </div>
    </div>
  );
}

export default withPopover(ClearEdit);
