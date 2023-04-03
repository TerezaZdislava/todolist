import {
  Heading,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  IconButton,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabIndicator,
  TabList,
} from '@chakra-ui/react';
import TodoItem from './TodoItem';
import {AppDispatch, RootState} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, removeTodo, changeStatus, updateDescription} from '../TodoReducer';
import {Todo, List, Filter} from '../interface/todo';
import TodoDescription from '../components/TodoDescription';
import {useState} from 'react';
import {removeList, updateListDescription} from '../ListReducer';
import {ReactComponent as HandleIconn} from '../assets/icons/handle.svg';
import MyPopover from '../components/Popover';

function TodoCard(props: List) {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: RootState) => state.todoReducer);
  const [taskDescription, setTaskDescription] = useState('');

  const [filter, setFilter] = useState<Filter>('all');
  const filteredTasks = filter === 'all' ? tasks : tasks.filter((task) => task.status === filter);

  function handleTitleChange(e: any, listId: string) {
    if (!e.target.value) {
      console.log('list remove');
      dispatch(removeList(listId));
    } else {
      console.log('list edit');
      dispatch(addTodo(taskDescription, listId));
    }
  }

  function addTask(listId: string) {
    if (taskDescription === '') {
      alert('Please type task description');
    } else {
      dispatch(addTodo(taskDescription, listId));
      setTaskDescription('');
    }
  }

  function allTasksDone(listId: string) {
    const updated = tasks
      .filter((task: Todo) => task.listId === listId)
      .map((task) => ({...task, status: 'completed'}));
    console.log(updated);
  }

  return (
    <Card key={props.id} style={{height: 'fit-content'}}>
      <CardHeader>
        <Heading size="md" display="flex" alignItems="center" justifyContent="space-between">
          {props.description}{' '}
          <MyPopover
            delete={() => dispatch(removeList(props.id))}
            allDone={() => allTasksDone(props.id)}
            dataType="list"
          />
        </Heading>
      </CardHeader>
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tab onClick={() => setFilter('all')}>All</Tab>
          <Tab onClick={() => setFilter('active')}>Active</Tab>
          <Tab onClick={() => setFilter('completed')}>Done</Tab>
        </TabList>
        <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
      </Tabs>
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
        />
        <Button ml={2} variant="contained" color="primary" onClick={() => addTask(props.id)}>
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}
export default TodoCard;
