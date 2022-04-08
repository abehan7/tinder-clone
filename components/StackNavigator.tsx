import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import useAuth from "../hooks";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const user = useAuth()?.user;
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
