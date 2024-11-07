import {Layout} from 'components';
import {FC} from 'react';
import {StyleSheet} from 'react-native';
import {TodosScreenProps} from 'navigation';
import {TODOS} from 'data/todo';
import {TodoList} from './components/TodoList';

export const TodosScreen: FC<TodosScreenProps> = ({navigation, route}) => {
  return (
    <Layout>
      <TodoList items={TODOS} />
    </Layout>
  );
};

const styles = StyleSheet.create({});
