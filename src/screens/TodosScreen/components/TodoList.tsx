import {FC, useCallback} from 'react';
import {FlatList} from 'react-native';
import {TodoRow} from './TodoRow';
import {TodoItem} from 'types';
import {ЕmptyList} from './ЕmptyList';

interface TodoListProps {
  items: TodoItem[];
  fetchTodos: () => void;
  isLoading?: boolean;
}

export const TodoList: FC<TodoListProps> = ({items, isLoading, fetchTodos}) => {
  const renderTodoItem = useCallback(
    ({item}: {item: TodoItem}) => <TodoRow {...item} />,
    [],
  );

  if (!items.length) {
    return <ЕmptyList />;
  }

  return (
    <FlatList
      onRefresh={fetchTodos}
      refreshing={isLoading}
      initialNumToRender={40}
      data={items}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      keyExtractor={item => item.id.toString()}
      renderItem={renderTodoItem}
    />
  );
};
