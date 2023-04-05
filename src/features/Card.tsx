import {Button, Card, CardHeader, CardBody, CardFooter, Input} from '@chakra-ui/react';
import TodoItem from './TodoItem';
import {AppDispatch, RootState} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, changeStatus} from '../reducer/TodoReducer';
import {Todo, List, Filter} from '../interface/todo';
import TitleInput from '../components/TitleInput';
import {useEffect, useState} from 'react';
import {removeList, updateListTitle} from '../reducer/ListReducer';
import CardTabs from '../components/CardTabs';
import CardEdit from '../components/CardEdit';
import {ReactComponent as HandleIconn} from '../assets/icons/handle.svg';
interface CardProps extends List {
  filter: Filter;
}

const itemStyle = {
  backgroundColor: 'white',
  height: 'fit-content',
  border: '1px solid ##DFE1E6',
  borderRadius: '5px',
  width: '350px',
  flexShrink: 0,
  margin: '10px',
};

function TodoCard(props: CardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: RootState) => state.todoReducer);
  const [taskDescription, setTaskDescription] = useState('');
  const [filteredTasks, setFilteredTasks] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>(props.filter);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    setFilter(props.filter);
  }, [props.filter]);

  useEffect(() => {
    const listTasks = tasks.filter((task: Todo) => task.listId === props.id);
    const newfilteredTasks =
      filter === 'all' ? listTasks : listTasks.filter((task) => task.status === filter);
    setFilteredTasks(newfilteredTasks);
    updateTabs();
  }, [filter, tasks]);

  function addTask(listId: string) {
    if (taskDescription === '') {
      alert('Please type task description');
    } else {
      dispatch(addTodo(taskDescription, listId));
      setTaskDescription('');
    }
  }

  function updateTabs() {
    switch (filter) {
      case 'all':
        setTabIndex(0);
        break;
      case 'active':
        setTabIndex(1);
        break;
      case 'completed':
        setTabIndex(2);
        break;
      default:
        setTabIndex(0);
    }
  }

  function allTasksDone(listId: string) {
    tasks
      .filter((task: Todo) => task.listId === listId)
      .forEach((task: Todo) => dispatch(changeStatus({status: 'completed', id: task.id})));
  }

  function handleTitleChange(e: any, id: string) {
    if (!e.target.value) {
      dispatch(removeList(id));
    } else {
      dispatch(updateListTitle({title: e.target.value, id}));
    }
  }

  return (
    <Card key={props.id} style={itemStyle}>
      <CardHeader display="flex" alignItems="center" justifyContent="space-between">
        <TitleInput title={props.title} onChange={(e) => handleTitleChange(e, props.id)} />
        <CardEdit
          icon={<HandleIconn />}
          delete={() => dispatch(removeList(props.id))}
          allDone={() => allTasksDone(props.id)}
        />
      </CardHeader>
      <CardTabs tabIndex={tabIndex} onClick={(e: Filter) => setFilter(e)} />
      <CardBody>
        {filteredTasks.map((filteredTask) => (
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
        <Button
          ml={2}
          variant="primary"
          isDisabled={taskDescription === ''}
          onClick={() => addTask(props.id)}
        >
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}
export default TodoCard;
