//import liraries
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./HomeStack";
import AuthStack from "./AuthStack";
import { useAuth } from "../Authcontext/AuthContext";
import { Text, View } from "react-native";

const Stack = createStackNavigator();

const Routes = () => {
  // const {user} = useAuth();

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
