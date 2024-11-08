import {createTodo, deleteTodo, getAllTodos, toggleTodo, updateTodo} from '.';
import {TodoState} from './types';
import {createSlice} from '@reduxjs/toolkit/react';

const initialState: TodoState = {
  isLoading: false,
  error: undefined,
  items: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},

  extraReducers: builder => {
    //getAllTodos
    builder
      .addCase(getAllTodos.pending, state => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getAllTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getAllTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // createTodo
      .addCase(createTodo.pending, state => {
        state.isLoading = true;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // updateTodo
      .addCase(updateTodo.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.map(todo =>
          todo.id === action.payload.id ? action.payload : todo,
        );
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // toggleTodo
      .addCase(toggleTodo.pending, state => {
        state.isLoading = true;
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.map(todo =>
          todo.id === action.payload.id ? action.payload : todo,
        );
      })
      .addCase(toggleTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // deleteTodo
      .addCase(deleteTodo.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTodo.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },

  selectors: {
    getSlice: (sliceState: TodoState) => sliceState,
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
