import TodoDescription from '../components/TodoDescription';
import {Todo} from '../interface/todo';
import {changeStatus, removeTodo, updateDescription} from '../TodoReducer';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store';
import {InputGroup, Checkbox, InputRightElement, InputLeftElement, Stack} from '@chakra-ui/react';

function TodoItem(todo: Todo) {
  const dispatch = useDispatch<AppDispatch>();

  function handleTextChange(e: any, id: string) {
    console.log('haloo');
    if (!e.target.value) {
      dispatch(removeTodo(id));
    } else {
      dispatch(updateDescription({description: e.target.value, id}));
    }
  }

  function handleStatusChange(e: any, id: string) {
    console.log('haloo');
    if (!e.target.checked) {
      dispatch(changeStatus({status: 'active', id}));
    } else {
      dispatch(changeStatus({status: 'completed', id}));
    }
  }

  return (
    // Click the text to edit
    //   <InputGroup>
    //   <InputLeftElement
    //     pointerEvents='none'
    //     color='gray.300'
    //     fontSize='1.2em'
    //     children='$'
    //   />
    //   <Input placeholder='Enter amount' />
    //   <InputRightElement children={<CheckIcon color='green.500' />} />
    // </InputGroup>
    <Stack spacing={1} mb={2} key={todo.id}>
      <InputGroup defaultValue="">
        <InputLeftElement
          // pointerEvents="none"
          style={{background: 'transparent'}}
          children={
            <Checkbox
              // defaultChecked
              onChange={(e) => handleStatusChange(e, todo.id)}
            ></Checkbox>
          }
        />
        <TodoDescription
          description={todo.description}
          status={todo.status}
          onChange={(e) => handleTextChange(e, todo.id)}
        />
        {/* <button
        onClick={() => {
          dispatch(removeTodo(todo.id));
        }}
      >
        DeleteIcon
      </button> */}
        <InputRightElement style={{background: 'transparent'}} children={<button>aa</button>} />
      </InputGroup>
    </Stack>
  );
}

export default TodoItem;
