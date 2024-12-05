import React from 'react';
import routeNames from '../constants/routeNames';
import screens from '../screens/index';

const SignupStack = Stack => {
  const navigationOptions = {
    headerShown: false,
  };
  return (
    <>
      <Stack.Screen
        name={routeNames.GENDER}
        component={screens.Gender}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.NATIONALITY}
        component={screens.Nationality}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.SKINCOLOR}
        component={screens.SkinColor}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.PROFESSION}
        component={screens.Profession}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.MARITIALSTATUS}
        component={screens.MaritialStatus}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.RELIGIOUSCOMMITMENT}
        component={screens.ReligiousCommitment}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.BODYSTRUCTURE}
        component={screens.BodyStructure}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.ABOUTYOURSELF}
        component={screens.AboutYourself}
        options={navigationOptions}
      />
    </>
  );
};

export default SignupStack;
