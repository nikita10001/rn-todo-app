import {TodoState} from './types';
import {createSlice} from '@reduxjs/toolkit/react';

const initialState: TodoState = {
  isLoading: false,
  error: null,
  items: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},

  extraReducers: builder => {},

  selectors: {
    getItems: (sliceState: TodoState) => sliceState.items,
    getIsLoading: (sliceState: TodoState) => sliceState.isLoading,
    getError: (sliceState: TodoState) => sliceState.error,
  },
});
export const {
  reducer: todoReducer,
  actions: todoActions,
  selectors: todoSelectors,
} = todoSlice;
