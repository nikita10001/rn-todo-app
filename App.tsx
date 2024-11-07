import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from 'navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider style={{flex: 1}}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
