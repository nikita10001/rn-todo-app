import {Layout} from 'components';
import {FC} from 'react';
import {StyleSheet} from 'react-native';
import {ScreensEnum, TodosScreenProps} from 'navigation';
import {TODOS} from 'data/todo';
import {TodoList} from './components/TodoList';
import {windowHeight, windowWidth} from 'constants/screen';
import {TodoAddBtn} from './components/TodoAddBtn';

export const TodosScreen: FC<TodosScreenProps> = ({navigation, route}) => {
  const handleAddNavigate = () => {
    navigation.navigate(ScreensEnum.TodoEditScreen, {});
  };
  return (
    <Layout>
      <TodoList items={TODOS} />
      <TodoAddBtn onPress={handleAddNavigate} />
    </Layout>
  );
};

const styles = StyleSheet.create({});
