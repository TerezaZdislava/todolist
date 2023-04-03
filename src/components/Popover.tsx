import {
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  PopoverHeader,
  PopoverBody,
  IconButton,
  Text,
} from '@chakra-ui/react';
import {MouseEventHandler} from 'react';
import {ReactComponent as HandleIconn} from '../assets/icons/handle.svg';

interface Props {
  dataType?: 'list' | 'task';
  allDone?: MouseEventHandler<HTMLButtonElement>;
  delete?: MouseEventHandler<HTMLButtonElement>;
}

function MyPopover(props: Props) {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton aria-label="Search database" icon={<HandleIconn />} variant="primary" />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>
          {props.dataType === 'list' ? (
            <div>
              <IconButton
                aria-label="Search database"
                icon={<HandleIconn />}
                variant="primary"
                onClick={props.allDone}
              />
              <Text>Mark all as done</Text>
            </div>
          ) : null}
          <IconButton
            aria-label="Search database"
            icon={<HandleIconn />}
            variant="primary"
            onClick={props.delete}
          />
          <Text>Delete {props.dataType}</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default MyPopover;
