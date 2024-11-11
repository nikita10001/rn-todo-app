import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, ScreensEnum} from './routes';
import * as Screens from 'screens';
import {COLORS} from 'style';
import * as SplashScreen from 'expo-splash-screen';
import {Button, ButtonType, FSize, FWeight} from 'ui';
import {Theme, useTheme} from 'context';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  const {theme, setTheme, colors} = useTheme();

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.hideAsync();
      } catch (error) {
        await SplashScreen.hideAsync();
      } finally {
      }
    })();
  }, []);

  const isLight = theme === Theme.Light;
  const toggleTheme = () => {
    setTheme(isLight ? Theme.Dark : Theme.Light);
  };

  return (
    <Stack.Navigator
      initialRouteName={ScreensEnum.NotesScreen}
      screenOptions={{
        headerRight: props => {
          return (
            <Button onPress={toggleTheme} type={ButtonType.TEXT}>
              {isLight ? 'Тёмная' : 'Светлая'}
            </Button>
          );
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: FSize.S17,
          color: colors.text,
          fontFamily: FWeight.Medium,
        },
        headerStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Stack.Screen
        options={{
          title: 'Заметки',
        }}
        name={ScreensEnum.NotesScreen}
        component={Screens.NotesScreen}
      />
      <Stack.Screen
        options={{
          title: 'Опись дел',
        }}
        name={ScreensEnum.TodosScreen}
        component={Screens.TodosScreen}
      />

      <Stack.Screen
        options={{
          title: '',
          presentation: 'modal',
        }}
        name={ScreensEnum.TodoEditScreen}
        component={Screens.TodoEditScreen}
      />
    </Stack.Navigator>
  );
};
