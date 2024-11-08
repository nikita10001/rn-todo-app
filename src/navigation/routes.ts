import {useNavigation as useNativeNavigation} from '@react-navigation/native';
import type {ParamListBase} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {TodoItem} from 'types';

export enum ScreensEnum {
  TodosScreen = 'TodosScreen',
  TodoEditScreen = 'TodoEditScreen',
}

type Routes = ScreensEnum;

type TodosScreenParams = {};
type TodoEditScreenParams = {
  todo?: TodoItem;
};

export type RootStackParamList = {
  [ScreensEnum.TodosScreen]: TodosScreenParams;
  [ScreensEnum.TodoEditScreen]: TodoEditScreenParams;
};

export type TodosScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreensEnum.TodosScreen
>;
export type TodoEditScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreensEnum.TodoEditScreen
>;

export const useNavigation = () =>
  useNativeNavigation<NativeStackNavigationProp<ParamListBase, Routes>>();
