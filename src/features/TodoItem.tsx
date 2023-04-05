import TitleInput from '../components/TitleInput';
import {Todo} from '../interface/todo';
import {
  changePriority,
  changeStatus,
  removeTodo,
  updateDescription,
  updateTitle,
} from '../reducer/TodoReducer';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store';
import {Checkbox} from '@chakra-ui/react';
import TaskEdit from '../components/TaskEdit';
import {ReactComponent as HandleIconn} from '../assets/icons/handle.svg';

function TodoItem(todo: Todo) {
  const dispatch = useDispatch<AppDispatch>();

  function handleTitleChange(e: any, taskid: string) {
    if (!e.target.value) {
      dispatch(removeTodo(taskid));
    } else {
      dispatch(updateTitle({title: e.target.value, id: taskid}));
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
    borderLeft: `2px solid ${todo.priority ? '#E32C1E' : '#24A148'}`,
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
        title={todo.title}
        status={todo.status}
        onChange={(e) => handleTitleChange(e, todo.id)}
      />
      <TaskEdit
        icon={<HandleIconn />}
        task={todo}
        onDescriptionChange={(e: any) =>
          dispatch(updateDescription({description: e.target.value, id: todo.id}))
        }
        onTitleChange={(e: any) => dispatch(updateTitle({title: e.target.value, id: todo.id}))}
        changePriority={(e: any) => handlePriorityChange(e.target.checked, todo.id)}
        delete={() => dispatch(removeTodo(todo.id))}
        // priority={todo.priority}
      />
    </div>
  );
}

export default TodoItem;
