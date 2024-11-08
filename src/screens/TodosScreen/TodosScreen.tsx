import {Layout} from 'components';
import {FC, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {ScreensEnum, TodosScreenProps} from 'navigation';
import {TodoList} from './components/TodoList';
import {TodoAddBtn} from './components/TodoAddBtn';
import {useAppDispatch, useAppSelector} from 'hooks';
import {getAllTodos, todoSelectors} from 'store';
import {
  FilterItem,
  FilterValue,
  TodoFilter,
  filterBtns,
} from './components/TodoFilter';

export const TodosScreen: FC<TodosScreenProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {items, isLoading, error} = useAppSelector(todoSelectors.getSlice);

  const [activeFilter, setActiveFilter] = useState<FilterItem>(filterBtns[0]);

  const fetchTodos = async () => {
    dispatch(getAllTodos());
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddNavigate = () => {
    navigation.navigate(ScreensEnum.TodoEditScreen, {});
  };

  const filteredItems = items.filter(todo => {
    if (activeFilter.value === FilterValue.Completed) return todo.completed;
    if (activeFilter.value === FilterValue.Active) return !todo.completed;
    return true;
  });

  return (
    <Layout>
      <TodoFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <TodoList
        fetchTodos={fetchTodos}
        isLoading={isLoading}
        items={filteredItems}
      />
      <TodoAddBtn onPress={handleAddNavigate} />
    </Layout>
  );
};

const styles = StyleSheet.create({});
