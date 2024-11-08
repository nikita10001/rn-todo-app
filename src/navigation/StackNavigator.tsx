import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, ScreensEnum} from './routes';
import * as Screens from 'screens';
import {COLORS} from 'style';
import * as SplashScreen from 'expo-splash-screen';
import {FSize, FWeight} from 'ui';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
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

  return (
    <Stack.Navigator
      initialRouteName={ScreensEnum.TodosScreen}
      screenOptions={{
        contentStyle: {
          backgroundColor: '#fff',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: FSize.S17,
          fontFamily: FWeight.Medium,
        },
        headerStyle: {
          backgroundColor: COLORS.mainBg,
        },
      }}>
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
