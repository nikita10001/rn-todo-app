import {useNavigation as useNativeNavigation} from '@react-navigation/native';
import type {ParamListBase} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export enum ScreensEnum {
  MainScreen = 'MainScreen',
}

type Routes = ScreensEnum;

type MainScreenParams = {};

export type RootStackParamList = {
  [ScreensEnum.MainScreen]: MainScreenParams;
};

export type MainScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreensEnum.MainScreen
>;

export const useNavigation = () =>
  useNativeNavigation<NativeStackNavigationProp<ParamListBase, Routes>>();
