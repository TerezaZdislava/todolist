import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {List} from '../interface/todo';

const initialState = [] as List[];
const {v4: uuidv4} = require('uuid');

const listReducer = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addList: {
      reducer: (state, action: PayloadAction<List>) => {
        state.push(action.payload);
      },
      prepare: (title: string) => ({
        payload: {
          id: uuidv4(),
          title,
        } as List,
      }),
    },
    removeList(state, action: PayloadAction<string>) {
      const index = state.findIndex((list) => list.id === action.payload);
      state.splice(index, 1);
    },
    resetLists() {
      // const index = state.findIndex((list) => list.id === action.payload);
      return initialState;
    },
    updateListTitle(state, action: PayloadAction<{title: string; id: string}>) {
      const index = state.findIndex((list) => list.id === action.payload.id);
      state[index].title = action.payload.title;
    },
  },
});

export const {removeList, updateListTitle, addList, resetLists} = listReducer.actions;
export default listReducer.reducer;
