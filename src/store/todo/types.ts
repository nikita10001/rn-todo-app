import {TodoItem} from 'types';

export interface TodoState {
  isLoading: boolean;
  error?: string;
  items: TodoItem[];
}
