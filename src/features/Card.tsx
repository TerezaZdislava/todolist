import {Button, Card, CardHeader, CardBody, CardFooter, Input} from '@chakra-ui/react';
import TodoItem from './TodoItem';
import {AppDispatch, RootState} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, changeStatus} from '../TodoReducer';
import {Todo, List, Filter} from '../interface/todo';
import TitleInput from '../components/TitleInput';
import {useEffect, useState} from 'react';
import {removeList, updateListDescription} from '../ListReducer';
import MyPopover from '../components/Popover';
import CardTabs from '../components/CardTabs';

function TodoCard(props: List) {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: RootState) => state.todoReducer);
  const [taskDescription, setTaskDescription] = useState('');
  const [filteredTasks, setFilteredTasks] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>('all');

  useEffect(() => {
    console.log('filter ' + filter);
    const newfilteredTasks =
      filter === 'all' ? tasks : tasks.filter((task) => task.status === filter);
    setFilteredTasks(newfilteredTasks);
    console.log('newfilteredTasks ' + newfilteredTasks);
  }, [props, filter, tasks]);

  function addTask(listId: string) {
    if (taskDescription === '') {
      alert('Please type task description');
    } else {
      dispatch(addTodo(taskDescription, listId));
      setTaskDescription('');
    }
  }

  function allTasksDone(listId: string) {
    tasks
      .filter((task: Todo) => task.listId === listId)
      .forEach((task) => dispatch(changeStatus({status: 'completed', id: task.id})));
  }

  function handleTitleChange(e: any, id: string) {
    if (!e.target.value) {
      dispatch(removeList(id));
    } else {
      dispatch(updateListDescription({description: e.target.value, id}));
    }
  }

  const itemStyle = {
    backgroundColor: 'white',
    height: 'fit-content',
    width: 'fit-content',
    border: '1px solid ##DFE1E6',
    borderRadius: '5px',
  };

  return (
    <Card key={props.id} style={itemStyle}>
      <CardHeader display="flex" alignItems="center" justifyContent="space-between">
        <TitleInput
          description={props.description}
          onChange={(e) => handleTitleChange(e, props.id)}
        />
        <MyPopover
          delete={() => dispatch(removeList(props.id))}
          allDone={() => allTasksDone(props.id)}
          dataType="list"
        />
      </CardHeader>
      <CardTabs onClick={(e: Filter) => setFilter(e)} />
      <CardBody>
        {filteredTasks
          .filter((task: Todo) => task.listId === props.id)
          .map((filteredTask) => (
            <TodoItem {...filteredTask} key={filteredTask.id} />
          ))}
      </CardBody>

      <CardFooter>
        <Input
          onChange={(e) => setTaskDescription(e.target.value)}
          value={taskDescription}
          placeholder="Add item"
          style={{borderColor: '#B3BAC5'}}
        />
        <Button ml={2} variant="contained" color="primary" onClick={() => addTask(props.id)}>
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}
export default TodoCard;
