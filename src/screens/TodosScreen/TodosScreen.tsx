import {Layout} from 'components';
import {FC, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {ScreensEnum, TodosScreenProps} from 'navigation';
import {TodoList} from './components/TodoList';
import {TodoAddBtn} from './components/TodoAddBtn';
import {useAppDispatch, useAppSelector} from 'hooks';
import {getAllTodos, todoSelectors} from 'store';

export const TodosScreen: FC<TodosScreenProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {items, isLoading, error} = useAppSelector(todoSelectors.getSlice);

  const fetchTodos = async () => {
    dispatch(getAllTodos());
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddNavigate = () => {
    navigation.navigate(ScreensEnum.TodoEditScreen, {});
  };
  return (
    <Layout>
      <TodoList fetchTodos={fetchTodos} isLoading={isLoading} items={items} />
      <TodoAddBtn onPress={handleAddNavigate} />
    </Layout>
  );
};

const styles = StyleSheet.create({});
