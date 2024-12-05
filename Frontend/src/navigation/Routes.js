import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import {useAuth} from '../Authcontext/AuthContext';
import {navigationRef} from '../component/NavigationService';
import {getData, storeData} from '../Authcontext/Async';
import en from '../../locales/en.json';
import ar from '../../locales/ar.json';
import i18next from 'i18next';
import {I18nextProvider, initReactI18next} from 'react-i18next';
import {
  PermissionsAndroid,
  Platform,
  Alert,
  View,
  ActivityIndicator,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

const initializeI18next = async () => {
  const selectedLanguage = (await getData('selectedLanguage')) || 'en';
  return i18next.use(initReactI18next).init({
    interpolation: {escapeValue: false},
    lng: selectedLanguage,
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
  });
};
const i18nextInitialization = initializeI18next();
const Routes = () => {
  const {user} = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    i18nextInitialization.then(() => setLoading(false));
    requestUserPermission();
  }, []);

  async function requestUserPermission() {
    if (Platform.OS === 'android') {
      const isPermitted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      if (isPermitted === 'granted' || isPermitted === 'never_ask_again') {
        getToken();
      }
    } else if (Platform.OS === 'ios') {
      getToken();
    }
  }

  async function getToken() {
    let fcmToken = await getData('device_token');
    if (!fcmToken) {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        await storeData('device_token', fcmToken);
      }
    }
  }

  const camelCaseIt = string =>
    string
      .split(' ')
      .map((e, i) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
      .join(' ');

  useEffect(() => {
    const unsubscribe = messaging().onMessage(remoteMessage => {
      const type = remoteMessage?.data?.type;
      let title = '';
      if (type) {
        title = camelCaseIt(type.replace('_', ' '));
      }
      Alert.alert(title, remoteMessage?.data?.message);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <I18nextProvider i18n={i18next}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          {!!user && user ? AppNavigator(Stack) : AuthStack(Stack)}
        </Stack.Navigator>
      </NavigationContainer>
    </I18nextProvider>
  );
};

export default Routes;
