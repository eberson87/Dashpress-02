
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Home from './src/pages/Home';
import Details from './src/pages/Details';

function Tabs() {
  return (
    <Tab.Navigator>
      <Stack.Screen
          name="Home"
          component={Home}
            options={{
              title: "Bem vindo!",
              headerStyle: {
                backgroundColor:"orange",

              }
            }}
          >
          </Stack.Screen>

          <Stack.Screen
          name="Details"
          component={Details}
          >
            
          </Stack.Screen>
    </Tab.Navigator>
  );
}


export default function Router() {
  return (
    <NavigationContainer> 

        <Stack.Navigator initialRouteName="Home">

          <Stack.Screen
          name="Home"
          component={Home}
            options={{
              title: "Bem vindo!",
              headerStyle: {
                backgroundColor:"orange",

              }
            }}
          >
          </Stack.Screen>

          <Stack.Screen
          name="Details"
          component={Tabs}
          >
            
          </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}


