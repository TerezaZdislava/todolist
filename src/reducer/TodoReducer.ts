import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Priority, Status, Todo} from '../interface/todo';

const initialState = [] as Todo[];
const {v4: uuidv4} = require('uuid');

const time = new Date()
  .toLocaleString('en', {weekday: 'short', day: 'numeric', month: 'short'})
  .toString();

const todoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      prepare: (title: string, listId: string) => ({
        payload: {
          id: uuidv4(),
          description: '',
          listId,
          status: 'active',
          priority: 'medium',
          completed: false,
          timeCreated: time,
          title,
        } as Todo,
      }),
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    resetTodos() {
      return initialState;
    },
    updateDescription(state, action: PayloadAction<{description: string; id: string}>) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].description = action.payload.description;
    },
    updateTitle(state, action: PayloadAction<{title: string; id: string}>) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].title = action.payload.title;
    },
    changeStatus(state, action: PayloadAction<{status: Status; id: string}>) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].status = action.payload.status;
    },
    changePriority(state, action: PayloadAction<{priority: Priority; id: string}>) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].priority = action.payload.priority;
    },
  },
});

export const {
  addTodo,
  updateTitle,
  resetTodos,
  removeTodo,
  changePriority,
  changeStatus,
  updateDescription,
} = todoReducer.actions;
export default todoReducer.reducer;
