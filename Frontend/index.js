import 'intl-pluralrules';
import React from 'react';
import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});
LogBox.ignoreLogs(['Require cycle:']);

const Root = () => {
  return <App />;
};

AppRegistry.registerComponent(appName, () => Root);
