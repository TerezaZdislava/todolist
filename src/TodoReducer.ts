import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Todo} from './interface/todo';

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
      prepare: (description: string) => ({
        payload: {
          id: uuidv4(),
          description,
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
    changeStatus(state, action: PayloadAction<{completed: boolean; id: string}>) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});

export const {addTodo, removeTodo, changeStatus, updateDescription} = todoReducer.actions;
export default todoReducer.reducer;
