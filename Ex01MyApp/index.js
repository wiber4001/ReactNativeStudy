/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyApp from './MyApp';// 확장자 js는 생략가능

AppRegistry.registerComponent(appName, () => MyApp);
