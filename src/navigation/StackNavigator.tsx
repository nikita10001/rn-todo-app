import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, ScreensEnum} from './routes';
import * as Screens from 'screens';
import {COLORS} from 'style';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.hideAsync();
      } catch (err) {
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

      {/* <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: COLORS.white,
          },
          presentation: 'modal',
        }}
        name={}
        component={}
      /> */}
    </Stack.Navigator>
  );
};
