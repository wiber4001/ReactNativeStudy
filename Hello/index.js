/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// 화면에 들어갈 component를 설정함, 객체설정없이 쓰므로 이것은 static임
//2번째 파라미터에서 App을 리턴함
// appName이라는 화면에 App함수를 리턴하는 명령