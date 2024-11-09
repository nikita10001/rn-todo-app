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
  NotesScreen = 'NotesScreen',
}

type Routes = ScreensEnum;

type TodosScreenParams = {};
type NotesScreenParams = {};
type TodoEditScreenParams = {
  todo?: TodoItem;
};

export type RootStackParamList = {
  [ScreensEnum.TodosScreen]: TodosScreenParams;
  [ScreensEnum.TodoEditScreen]: TodoEditScreenParams;
  [ScreensEnum.NotesScreen]: NotesScreenParams;
};

export type TodosScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreensEnum.TodosScreen
>;
export type TodoEditScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreensEnum.TodoEditScreen
>;
export type NotesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreensEnum.NotesScreen
>;

export const useNavigation = () =>
  useNativeNavigation<NativeStackNavigationProp<ParamListBase, Routes>>();
