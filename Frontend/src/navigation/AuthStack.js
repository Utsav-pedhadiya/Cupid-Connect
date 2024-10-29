import React from "react";
import routeNames from "../constants/routeNames";
import screens from "../screens/index";

const AuthStack = (Stack) => {
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
    </>
  );
};
export default AuthStack;
