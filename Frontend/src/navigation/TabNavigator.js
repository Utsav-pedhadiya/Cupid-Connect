import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import routeNames from '../constants/routeNames';
import screens from '../screens';
import Icon from 'react-native-vector-icons/Ionicons/';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const {t} = useTranslation();
  
  return (
    <Tab.Navigator
      activecolor="black"
      inactivecolor="#FC3876"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name={routeNames.PEOPLE}
        component={screens.People}
        options={{
          tabBarLabel: t('People'),
          tabBarIcon: ({focused}) => (
            <Icon2
              name="people"
              size={25}
              color={focused ? '#FC3876' : 'black'}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={routeNames.NOTIFICATION}
        component={screens.Notification}
        options={{
          tabBarLabel: t('Notifications'),
          tabBarIcon: ({focused}) => (
            <Icon
              name="notifications-outline"
              size={25}
              color={focused ? '#FC3876' : 'black'}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={routeNames.REQUESTCONTACT}
        component={screens.RequestContact}
        options={{
          tabBarLabel: t('Request Contact'),
          tabBarIcon: ({focused}) => (
            <Icon1
              name="message-text-outline"
              size={25}
              color={focused ? '#FC3876' : 'black'}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={routeNames.PROFILE}
        component={screens.Profile}
        options={{
          tabBarLabel: t('Profile'),
          tabBarIcon: ({focused}) => (
            <Icon3
              name="user-tie"
              size={25}
              color={focused ? '#FC3876' : 'black'}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
