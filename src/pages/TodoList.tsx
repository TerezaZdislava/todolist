import {
  Flex,
  Box,
  Text,
  ButtonGroup,
  Divider,
  Spacer,
  IconButton,
  SimpleGrid,
  Heading,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import {EventHandler, useState} from 'react';
import {ReactComponent as HandleIconn} from '../assets/icons/handle.svg';
import {ReactComponent as SettingIcon} from '../assets/icons/settings.svg';
import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '../store';
import {addTodo, removeTodo, changeStatus, updateDescription} from '../TodoReducer';
import {Todo} from '../interface/todo';
import TodoDescription from '../components/TodoDescription';

function TodoList(props: any) {
  //React Hooks
  const [todoDescription, setTodoDescription] = useState('');

  //React Redux Hooks
  const todoList = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch<AppDispatch>();

  console.log('props', props.todos);
  const today = new Date().toISOString().slice(0, 10);
  console.log(todoList);

  function handleTextChange(e: any, id: string) {
    console.log('haloo');
    if (!e.target.value) {
      dispatch(removeTodo(id));
    } else {
      dispatch(updateDescription({description: e.target.value, id}));
    }
  }
  // const [todo, setTodo] = useState('');

  // const add = () => {
  //   if (todo === '') {
  //     alert('Input is Empty');
  //   } else {
  //     props.addTodo({
  //       id: Math.floor(Math.random() * 1000),
  //       item: todo,
  //       completed: false,
  //     });
  //     setTodo('');
  //   }
  // };

  // const handleChange = (e: any) => {
  //   setTodo(e.target.value);
  // };

  return (
    <>
      <Flex p={4} w="100%" color="black" alignItems="end">
        <Flex gap="2">
          <Text as="b">Today</Text>
          <Text> {today}</Text>
        </Flex>
        <Spacer />
        <ButtonGroup gap="1">
          <IconButton aria-label="Search database" icon={<HandleIconn />} variant="primary" />
          <IconButton aria-label="Search database" icon={<SettingIcon />} />
        </ButtonGroup>
      </Flex>
      <Divider orientation="horizontal" ml={4} mr={4} w="auto" />

      {/* <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        <Card>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </SimpleGrid> */}
      <div>
        <textarea onChange={(e) => setTodoDescription(e.target.value)} value={todoDescription} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(addTodo(todoDescription));
            setTodoDescription('');
          }}
        >
          Add Item
        </Button>
        <ul>
          {todoList.map((todo: Todo) => (
            <li key={todo.id}>
              <TodoDescription
                description={todo.description}
                completed={todo.completed}
                onChange={(e) => handleTextChange(e, todo.id)}
              />
              <button
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                DeleteIcon
              </button>
              <input
                type="checkbox"
                onChange={() => {
                  dispatch(changeStatus({completed: !todo.completed, id: todo.id}));
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
// export default TodoList;
export default TodoList;
