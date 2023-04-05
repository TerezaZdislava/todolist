import {IconButton, Text} from '@chakra-ui/react';
import {ReactComponent as TodayIcon} from '../assets/icons/today.svg';
import {ReactComponent as CheckIcon} from '../assets/icons/check.svg';
import {ReactComponent as MenuIcon} from '../assets/icons/menu.svg';
import {MouseEventHandler} from 'react';
import withPopover from './withPopover';

interface Props {
  viewCompleted?: MouseEventHandler<HTMLButtonElement>;
  viewTodo?: MouseEventHandler<HTMLButtonElement>;
  viewAll?: MouseEventHandler<HTMLButtonElement>;
}

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
};

function ViewEdit(props: Props) {
  return (
    <div>
      <div style={rowStyle}>
        <IconButton
          size="sm"
          mr="2"
          aria-label="done"
          icon={<MenuIcon />}
          variant="primary"
          onClick={props.viewAll}
        />
        <Text>View all tasks</Text>
      </div>
      <div style={rowStyle}>
        <IconButton
          size="sm"
          mr="2"
          aria-label="done"
          icon={<CheckIcon />}
          variant="primary"
          onClick={props.viewCompleted}
        />
        <Text>View completed tasks</Text>
      </div>
      <div style={rowStyle}>
        <IconButton
          size="sm"
          mr="2"
          aria-label="done"
          icon={<TodayIcon />}
          variant="primary"
          onClick={props.viewTodo}
        />
        <Text>View to-do tasks</Text>
      </div>
    </div>
  );
}

export default withPopover(ViewEdit);
