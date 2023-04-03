import {Flex, Text, ButtonGroup, Spacer, IconButton} from '@chakra-ui/react';
import {ReactComponent as HandleIconn} from '../assets/icons/handle.svg';
import {ReactComponent as SettingIcon} from '../assets/icons/settings.svg';

interface Props {
  today: string;
}

function TodoListHeader(props: Props) {
  return (
    <Flex p={4} w="100%" color="black" alignItems="end">
      <Flex gap="2">
        <Text as="b">Today</Text>
        <Text>{props.today}</Text>
      </Flex>
      <Spacer />
      <ButtonGroup gap="1">
        <IconButton aria-label="Search database" icon={<HandleIconn />} variant="primary" />
        <IconButton aria-label="Search database" icon={<SettingIcon />} />
      </ButtonGroup>
    </Flex>
  );
}

export default TodoListHeader;
