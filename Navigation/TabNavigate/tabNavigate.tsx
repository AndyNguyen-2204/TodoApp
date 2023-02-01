import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screen/Home/Home';
import ListTodo from '../../Screen/ListTodo/listTodo';
import TodoAddnew from "../../Screen/TodoAddnew/TodoAdd"
import  Icon  from "react-native-vector-icons/FontAwesome"
import  Iconn  from "react-native-vector-icons/Entypo"
export default function TabNavigate() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" screenOptions={{
        tabBarActiveTintColor: '#55847A',
        tabBarInactiveTintColor:"#967259",
        tabBarHideOnKeyboard:true,
        tabBarStyle:{backgroundColor:"#EEEEEE"}
      }}>
          <Tab.Screen name="Home" component={Home}
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' size={25} color={color}/>
          ),
          }}
           />
          <Tab.Screen name="Add new" component={TodoAddnew} 
          options={{
            tabBarLabel: 'Add new',
            tabBarIcon: ({ color, size }) => (
              <Iconn name='add-to-list' size={25} color={color}/>
            ),
            }}
            />
          <Tab.Screen name="ListTodo" component={ListTodo} 
          options={{
            tabBarLabel: 'List',
            tabBarIcon: ({ color, size }) => (
              <Iconn name='list' size={25} color={color}/>
            ),
            }}
            />
        </Tab.Navigator>
      </NavigationContainer>
  )
}
