import {Divider, SimpleGrid, Text, Button, Flex, Spacer, Heading} from '@chakra-ui/react';
import {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '../store';
import {removeList, updateListDescription, addList, resetLists} from '../ListReducer';
import {removeTodo, resetTodos} from '../TodoReducer';
import {Filter, List, Todo} from '../interface/todo';

import TodoCard from '../features/Card';
import ViewEdit from '../components/ViewEdit';
import ClearEdit from '../components/ClearEdit';
import {ReactComponent as SettingsIcon} from '../assets/icons/settings.svg';
import {ReactComponent as MenuIcon} from '../assets/icons/menu.svg';
import CreateList from '../components/CreateList';

function TodoList(props: any) {
  const [listDescription, setListDescription] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const todoList = useSelector((state: RootState) => state.listReducer);
  const tasks = useSelector((state: RootState) => state.todoReducer);
  const dispatch = useDispatch<AppDispatch>();
  const [showCreateList, setShowCreateList] = useState(false);

  const today = new Date()
    .toLocaleString('en', {weekday: 'short', day: 'numeric', month: 'short'})
    .toString();

  function addTodoList() {
    if (listDescription === '') {
      alert('Please type list name');
    } else {
      dispatch(addList(listDescription));
      cancelCreateList();
    }
  }

  function handleClearAll() {
    dispatch(resetTodos());
    dispatch(resetLists());
  }

  function handleAllDone() {
    tasks
      .filter((task: Todo) => task.status === 'completed')
      .forEach((task: Todo) => dispatch(removeTodo(task.id)));
  }

  function cancelCreateList() {
    setListDescription('');
    setShowCreateList(false);
  }

  return (
    <>
      <Flex p={4} w="100%" color="black" alignItems="end">
        <Flex gap="2" alignItems="end">
          <Heading size="md">Today</Heading>
          <Text ml="2">{today}</Text>
        </Flex>
        <Spacer />
        <ViewEdit
          viewCompleted={() => setFilter('completed')}
          viewTodo={() => setFilter('active')}
          viewAll={() => setFilter('all')}
          icon={<SettingsIcon />}
        />
        <ClearEdit
          icon={<MenuIcon />}
          clearAll={() => handleClearAll()}
          clearDone={() => handleAllDone()}
        />
      </Flex>
      <Divider orientation="horizontal" ml={4} mr={4} w="auto" style={{color: '#DFE1E6'}} />

      <SimpleGrid m={3} spacing={4} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
        {todoList.map((list: List) => (
          <TodoCard {...list} key={list.id} filter={filter} />
        ))}
        <div>
          {todoList.length > 0 ? (
            <>
              {!showCreateList ? (
                <Button
                  style={{width: '100%'}}
                  variant="contained"
                  color="primary"
                  onClick={() => setShowCreateList(true)}
                >
                  Add new list
                </Button>
              ) : null}
              {showCreateList ? (
                <CreateList
                  add={() => addTodoList()}
                  cancel={() => cancelCreateList()}
                  onChange={(e) => setListDescription(e.target.value)}
                />
              ) : null}
            </>
          ) : (
            <CreateList
              add={() => addTodoList()}
              cancel={() => setListDescription('')}
              onChange={(e) => setListDescription(e.target.value)}
            />
          )}
        </div>
      </SimpleGrid>
    </>
  );
}

export default TodoList;
