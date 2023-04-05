import TitleInput from '../components/TitleInput';
import {Priority, Todo} from '../interface/todo';
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
import {useState} from 'react';

function TodoItem(todo: Todo) {
  const dispatch = useDispatch<AppDispatch>();
  const [priorityColor, setPriorityColor] = useState('#FF9800');

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

  function handlePriorityChange(e: Priority, taskid: string) {
    console.log('priority ' + e);
    dispatch(changePriority({priority: e, id: taskid}));
    changePriorityColor(e);
  }

  const itemStyle = {
    padding: '10px',
    display: 'flex',
    marginBottom: '8px',
    border: '1px solid #DFE1E6',
    borderLeft: `2px solid ${priorityColor}`,
    borderRadius: '5px',
    alignItems: 'center',
  };

  function changePriorityColor(priority: Priority) {
    console.log('priority ' + priority);
    switch (priority) {
      case 'low':
        setPriorityColor('#24A148');
        break;
      case 'medium':
        setPriorityColor('#FF9800');
        break;
      case 'high':
        setPriorityColor('#E32C1E');
        break;
      default:
        setPriorityColor('#FF9800');
    }
  }

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
        changePriority={(e: any) => handlePriorityChange(e.target.value, todo.id)}
        delete={() => dispatch(removeTodo(todo.id))}
        // priority={todo.priority}
      />
    </div>
  );
}

export default TodoItem;
