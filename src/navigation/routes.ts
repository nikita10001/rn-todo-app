import {useNavigation as useNativeNavigation} from '@react-navigation/native';
import type {ParamListBase} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export enum ScreensEnum {
  TodosScreen = 'TodosScreen',
}

type Routes = ScreensEnum;

type TodosScreenParams = {};

export type RootStackParamList = {
  [ScreensEnum.TodosScreen]: TodosScreenParams;
};

export type TodosScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreensEnum.TodosScreen
>;

export const useNavigation = () =>
  useNativeNavigation<NativeStackNavigationProp<ParamListBase, Routes>>();
