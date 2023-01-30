
import React from 'react';
import WelcomeScreen from "./Screen/WelcomeScreen/welcomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoAddnew from "./Screen/TodoAddnew/TodoAdd"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import {
} from 'react-native';
import Home from './Screen/Home/Home';
import ListTodo from './Screen/ListTodo/listTodo';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
   <Provider store={store}>
    <NavigationContainer>
  <Stack.Navigator initialRouteName="Welcome">
  <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="Add new" component={TodoAddnew} />
  </Stack.Navigator>
</NavigationContainer>
   </Provider>
  );
}

export default App;
