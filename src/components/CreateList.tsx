import {Button, Input, Flex} from '@chakra-ui/react';
import {ChangeEventHandler, MouseEventHandler} from 'react';

interface Props {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  cancel?: MouseEventHandler<HTMLButtonElement>;
  add?: MouseEventHandler<HTMLButtonElement>;
}

function CreateList(props: Props) {
  return (
    <>
      <Input
        onChange={props.onChange}
        placeholder="Add new list"
        style={{borderColor: '#B3BAC5', backgroundColor: 'white'}}
      />
      <Flex gap="4" w="100%" justify="end" mt="3">
        <Button variant="secondary" color="primary" onClick={props.cancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={props.add}>
          Save
        </Button>
      </Flex>
    </>
  );
}

export default CreateList;
