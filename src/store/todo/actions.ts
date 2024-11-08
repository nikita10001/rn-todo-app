import {createAsyncThunk} from '@reduxjs/toolkit';
import {TodoService} from 'api';
import {TodoItem} from 'types';

export const getAllTodos = createAsyncThunk<
  TodoItem[],
  void,
  {rejectValue: string}
>('todo/getAllTodos', async (_, {rejectWithValue}) => {
  try {
    const response = await TodoService.getAll();
    return response;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const createTodo = createAsyncThunk<
  TodoItem,
  Partial<TodoItem>,
  {rejectValue: string}
>('todo/createTodo', async (todo, {rejectWithValue}) => {
  try {
    const response = await TodoService.create(todo);
    return response;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const updateTodo = createAsyncThunk<
  TodoItem,
  Partial<TodoItem>,
  {rejectValue: string}
>('todo/updateTodo', async (todo, {rejectWithValue}) => {
  try {
    const response = await TodoService.update(todo);
    return response;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
export const toggleTodo = createAsyncThunk<
  TodoItem,
  number,
  {rejectValue: string}
>('todo/toggleTodo', async (todoId, {rejectWithValue}) => {
  try {
    const response = await TodoService.toggle(todoId);
    return response;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const deleteTodo = createAsyncThunk<
  number,
  number,
  {rejectValue: string}
>('todo/deleteTodo ', async (todoId, {rejectWithValue, dispatch}) => {
  try {
    const response = await TodoService.delete(todoId);
    dispatch(getAllTodos());
    return response;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
