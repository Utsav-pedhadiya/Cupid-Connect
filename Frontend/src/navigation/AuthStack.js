import React, {useEffect} from 'react';

import routeNames from '../constants/routeNames';
import screens from '../screens/index';

const AuthStack = Stack => {
  const navigationOptions = {
    headerShown: false,
  };

  return (
    <>
      <Stack.Screen
        name={routeNames.SPLASHSCRREN}
        component={screens.Splashscreen}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.AGREETERMSCONDITION}
        component={screens.AgreeTermsCondition}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.PHONENUMBER}
        component={screens.PhoneNumber}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.OTP}
        component={screens.Otp}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.INTROSLIDER}
        component={screens.IntroSlider}
        options={navigationOptions}
      />
           <Stack.Screen
        name={routeNames.SIGNUPSCREENS}
        component={screens.SignupScreens}
        options={navigationOptions}
      />
    </>
  );
};
export default AuthStack;
