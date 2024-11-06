/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {LogBox} from 'react-native';

const error = console.error;
console.error = (...args) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};
LogBox.ignoreLogs(['Require cycle:']);

AppRegistry.registerComponent(appName, () => App);
