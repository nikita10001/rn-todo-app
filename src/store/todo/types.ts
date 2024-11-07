import {TodoItem} from 'types';

export interface TodoState {
  isLoading: boolean;
  error: string | null;
  items: TodoItem[];
}
