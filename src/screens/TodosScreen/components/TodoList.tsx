import {FC, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {TodoRow} from './TodoRow';
import {TodoItem} from 'types';
import {COLORS} from 'style';

interface TodoListProps {
  items: TodoItem[];
}

export const TodoList: FC<TodoListProps> = ({items}) => {
  const renderTodoItem = useCallback(
    ({item}: {item: TodoItem}) => <TodoRow {...item} />,
    [],
  );
  return (
    <FlatList
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
