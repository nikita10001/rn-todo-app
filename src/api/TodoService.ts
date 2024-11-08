import {TodoItem} from 'types';
import {apiService} from './service';

export class TodoService {
  static async getAll() {
    const {data} = await apiService.get(`/todo`);
    return data;
  }
  static async create(todo: Omit<TodoItem, 'id' | 'completed'>) {
    const {data} = await apiService.post('/todo', todo);
    return data;
  }
  static async update(todo: Partial<TodoItem>) {
    const {id, ...body} = todo;
    const {data} = await apiService.put(`/todo/${id}`, body);
    return data;
  }
  static async patch(todoId: number) {
    const {data} = await apiService.patch(`/todo/${todoId}/toggle`);
    return data;
  }
  static async delete(todoId: number) {
    const {data} = await apiService.delete(`/todo/${todoId}`);
    return data;
  }
}
