import TitleInput from '../components/TitleInput';
import {Todo} from '../interface/todo';
import {changePriority, changeStatus, removeTodo, updateDescription} from '../TodoReducer';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store';
import {Checkbox} from '@chakra-ui/react';
import TaskEdit from '../components/TaskEdit';
import {ReactComponent as HandleIconn} from '../assets/icons/handle.svg';

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

  function handlePriorityChange(e: boolean, id: string) {
    if (!e) {
      dispatch(changePriority({priority: false, id}));
    } else {
      dispatch(changePriority({priority: true, id}));
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
    <div key={todo.id} style={itemStyle}>
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
      <TaskEdit
        icon={<HandleIconn />}
        changePriority={(e: any) => handlePriorityChange(e.target.checked, todo.id)}
        delete={() => dispatch(removeTodo(todo.id))}
        priority={todo.priority}
      />
    </div>
  );
}

export default TodoItem;
