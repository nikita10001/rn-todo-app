import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
  'todo/fetchTodos',
  async (_, {rejectWithValue}) => {
    try {
    } catch (error) {}
  },
);

export const createTodo = createAsyncThunk(
  'todo/createTodo',
  async (_, {rejectWithValue}) => {
    try {
    } catch (error) {}
  },
);

export const updateTodo = createAsyncThunk(
  'todo/updateTodo',
  async (_, {rejectWithValue}) => {
    try {
    } catch (error) {}
  },
);

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo ',
  async (_, {rejectWithValue}) => {
    try {
    } catch (error) {}
  },
);
