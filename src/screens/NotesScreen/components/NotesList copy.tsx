import {FC, useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {NotesRow} from './NotesRow';
import {TodoItem} from 'types';
import {DisplayMode} from '../NotesScreen';

interface NotesListProps {
  items: TodoItem[];
  fetchTodos?: () => void;
  isLoading?: boolean;
  displayMode?: DisplayMode;
}

export const NotesList: FC<NotesListProps> = ({
  items,
  isLoading = false,
  fetchTodos,
  displayMode = DisplayMode.CARDS,
}) => {
  const renderTodoItem = useCallback(
    ({item}: {item: TodoItem}) => <NotesRow {...item} />,
    [],
  );

  // Устанавливаем numColumns на основе displayMode
  const [numColumns, setNumColumns] = useState<number>(2);

  useEffect(() => {
    setNumColumns(displayMode === DisplayMode.CARDS ? 2 : 1);
  }, [displayMode]);

  return (
    <FlatList
      key={`flatList${numColumns}`}
      onRefresh={() => fetchTodos?.()}
      refreshing={isLoading}
      initialNumToRender={40}
      data={items}
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 10,
        gap: 10,
      }}
      keyExtractor={item => item.id.toString()}
      renderItem={renderTodoItem}
      numColumns={numColumns} // Используем состояние
    />
  );
};
