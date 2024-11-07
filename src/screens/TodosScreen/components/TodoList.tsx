import {FC, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {TodoRow} from './TodoRow';
import {TodoItem} from 'types';

interface TodoListProps {
  items: TodoItem[];
}

export const TodoList: FC<TodoListProps> = ({items}) => {
  const renderTodoItem = useCallback(
    ({item}: {item: TodoItem}) => (
      <TodoRow
        title={item.title}
        description={item.description}
        completed={item.completed}
      />
    ),
    [],
  );

  return (
    <FlatList
      data={items}
      contentContainerStyle={{
        paddingHorizontal: 10,
        gap: 3,
      }}
      keyExtractor={item => item.id.toString()}
      renderItem={renderTodoItem}
    />
  );
};

const styles = StyleSheet.create({});
