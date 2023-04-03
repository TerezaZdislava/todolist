import {Divider, SimpleGrid, Button, Input} from '@chakra-ui/react';
import {ChangeEvent, EventHandler, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '../store';
import {removeList, updateListDescription, addList} from '../ListReducer';
import {List} from '../interface/todo';
import TodoDescription from '../components/TodoDescription';
import {TextChange} from 'typescript';
import TodoItem from '../features/TodoItem';
import TodoCard from '../features/Card';
import TodoListHeader from '../components/TodoListHeader';

function TodoList(props: any) {
  //React Hooks
  const [listDescription, setListDescription] = useState('');

  //React Redux Hooks
  const todoList = useSelector((state: RootState) => state.listReducer);
  const dispatch = useDispatch<AppDispatch>();

  const today: string = new Date().toISOString().slice(0, 10);
  console.log(todoList);

  function addTodoList() {
    if (listDescription === '') {
      alert('Please type list name');
    } else {
      dispatch(addList(listDescription));
      setListDescription('');
    }
  }

  return (
    <>
      <TodoListHeader today={today} />
      <Divider orientation="horizontal" ml={4} mr={4} w="auto" />
      {/* <div> */}
      <SimpleGrid m={3} spacing={4} templateColumns="repeat(auto-fill, minmax(250px, 1fr))">
        {todoList.map((list: List) => (
          <TodoCard {...list} key={list.id} />
        ))}
        <Input
          onChange={(e) => setListDescription(e.target.value)}
          value={listDescription}
          placeholder="Add item"
        />
        <Button variant="contained" color="primary" onClick={() => addTodoList()}>
          Add Todo List
        </Button>
      </SimpleGrid>
      {/* </div> */}
    </>
  );
}

export default TodoList;
