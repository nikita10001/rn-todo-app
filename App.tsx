import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from 'navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from 'store';
import {ModalProvider} from 'context';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <SafeAreaProvider style={{flex: 1}}>
          <ModalProvider>
            <NavigationContainer>
              <StackNavigator />
            </NavigationContainer>
          </ModalProvider>
        </SafeAreaProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
