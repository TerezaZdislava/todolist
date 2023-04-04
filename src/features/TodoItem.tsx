import TitleInput from '../components/TitleInput';
import {Todo} from '../interface/todo';
import {changePriority, changeStatus, removeTodo, updateDescription} from '../TodoReducer';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store';
import {InputGroup, Checkbox, InputRightElement, InputLeftElement, Stack} from '@chakra-ui/react';

import MyPopover from '../components/Popover';

function TodoItem(todo: Todo) {
  const dispatch = useDispatch<AppDispatch>();

  function handleTextChange(e: any, id: string) {
    if (!e.target.value) {
      dispatch(removeTodo(id));
    } else {
      dispatch(updateDescription({description: e.target.value, id}));
    }
  }

  function handleStatusChange(e: any, id: string) {
    if (!e.target.checked) {
      dispatch(changeStatus({status: 'active', id}));
    } else {
      dispatch(changeStatus({status: 'completed', id}));
    }
  }

  function handlePriorityChange(e: any, id: string) {
    if (!e.target.checked) {
      dispatch(changePriority({priority: true, id}));
    } else {
      dispatch(changePriority({priority: false, id}));
    }
  }
  const itemStyle = {
    padding: '10px',
    display: 'flex',
    marginBottom: '8px',
    border: '1px solid #DFE1E6',
    borderLeft: `2px solid ${todo.priority ? 'red' : 'green'}`,
    borderRadius: '5px',
    alignItems: 'center',
  };

  return (
    // <Stack spacing={1} mb={2} key={todo.id}>
    //   <InputGroup defaultValue="">
    //     <InputLeftElement
    //       style={{background: 'transparent'}}
    //       children={<Checkbox onChange={(e) => handleStatusChange(e, todo.id)}></Checkbox>}
    //     />
    //     <TodoDescription
    //       description={todo.description}
    //       status={todo.status}
    //       onChange={(e) => handleTextChange(e, todo.id)}
    //     />
    //     <InputRightElement style={{background: 'transparent'}}>
    //       <MyPopover
    //         changePriority={(e) => handlePriorityChange(e, todo.id)}
    //         delete={() => dispatch(removeTodo(todo.id))}
    //         dataType="task"
    //       />
    //     </InputRightElement>
    //   </InputGroup>
    // </Stack>
    <div key={todo.id} style={itemStyle}>
      {/* <div style={priorityStyle}></div> */}
      <Checkbox
        isChecked={todo.status == 'completed'}
        onChange={(e) => handleStatusChange(e, todo.id)}
        style={{
          background: 'transparent',
          border: '1px solid #6B778C',
          height: 'fit-content',
          borderRadius: '3px',
        }}
        size="lg"
      ></Checkbox>
      <TitleInput
        description={todo.description}
        status={todo.status}
        onChange={(e) => handleTextChange(e, todo.id)}
      />
      <MyPopover
        changePriority={(e) => handlePriorityChange(e, todo.id)}
        delete={() => dispatch(removeTodo(todo.id))}
        dataType="task"
      />
    </div>
  );
}

export default TodoItem;
// children={}
