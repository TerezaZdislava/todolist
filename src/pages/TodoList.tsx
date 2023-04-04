import {Divider, SimpleGrid, Button, Input} from '@chakra-ui/react';
import {ChangeEvent, EventHandler, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '../store';
import {removeList, updateListDescription, addList} from '../ListReducer';
import {List} from '../interface/todo';
import TodoDescription from '../components/TitleInput';
import {TextChange} from 'typescript';
import TodoItem from '../features/TodoItem';
import TodoCard from '../features/Card';
import TodoListHeader from '../components/TodoListHeader';

function TodoList(props: any) {
  const [listDescription, setListDescription] = useState('');
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
      <SimpleGrid m={3} spacing={4} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
        {todoList.map((list: List) => (
          <TodoCard {...list} key={list.id} />
        ))}
        <div>
          <Input
            onChange={(e) => setListDescription(e.target.value)}
            value={listDescription}
            placeholder="Add item"
            style={{borderColor: '#B3BAC5', backgroundColor: 'white'}}
          />
          <Button variant="contained" color="primary" onClick={() => addTodoList()}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={() => addTodoList()}>
            Add Todo List
          </Button>
        </div>
      </SimpleGrid>
      {/* </div> */}
    </>
  );
}

export default TodoList;
