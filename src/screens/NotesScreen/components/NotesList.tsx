import {FC, useCallback} from 'react';
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
  const displayProps =
    displayMode === DisplayMode.CARDS
      ? {
          numColumns: 2,
          columnWrapperStyle: {
            justifyContent: 'space-between',
            gap: 10,
          },
          key: `flatList2`,
        }
      : {
          numColumns: 1,
          key: `flatList1`,
        };

  const renderTodoItem = useCallback(
    ({item}: {item: TodoItem}) => <NotesRow mode={displayMode} {...item} />,
    [displayProps],
  );

  return (
    <FlatList
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
      {...(displayProps as any)}
    />
  );
};
