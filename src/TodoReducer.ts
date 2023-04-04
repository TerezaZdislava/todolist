import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Status, Todo} from './interface/todo';

const initialState = [] as Todo[];
const {v4: uuidv4} = require('uuid');

const todoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      prepare: (description: string, listId: string) => ({
        payload: {
          id: uuidv4(),
          description,
          listId,
          status: 'active',
          priority: false,
          completed: false,
        } as Todo,
      }),
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    updateDescription(state, action: PayloadAction<{description: string; id: string}>) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].description = action.payload.description;
    },
    changeStatus(state, action: PayloadAction<{status: Status; id: string}>) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].status = action.payload.status;
    },
    changePriority(state, action: PayloadAction<{priority: boolean; id: string}>) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].priority = action.payload.priority;
    },
  },
});

export const {addTodo, removeTodo, changePriority, changeStatus, updateDescription} =
  todoReducer.actions;
export default todoReducer.reducer;
