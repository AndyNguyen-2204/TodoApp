
import React from 'react';
import WelcomeScreen from "./Screen/WelcomeScreen/welcomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './Screen/Home/Home';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Welcome">
  <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
  <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
