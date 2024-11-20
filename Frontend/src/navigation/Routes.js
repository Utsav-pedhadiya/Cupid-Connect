//import liraries
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";

const Stack = createStackNavigator();

const Routes = () => {
  // const {user} = useAuth();
  console.log('gfd');
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {AuthStack(Stack)}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
