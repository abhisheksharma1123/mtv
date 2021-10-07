import React from 'react';
import { Text, View, Button } from 'react-native';
import { StyleSheet, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Details} from  './components/Details'


import { MovieScreen } from './Screens/MovieScreen';
import { TvScreen } from './Screens/TvScreen';
import { SearchScreen } from './Screens/SearchScreen';
import { NativeBaseProvider, Box } from 'native-base';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function TabNav(){
  return (
    <Tab.Navigator>
        <Tab.Screen name="Movies" component={MovieScreen} />
        <Tab.Screen name="Search Results" component={SearchScreen} />
        <Tab.Screen name="TV Shows" component={TvScreen} />
    </Tab.Navigator>
  )

}


export default function App() {
  return (
   <NativeBaseProvider>
    <NavigationContainer>
      <StatusBar backgroundColor="#293648"/>
      <Stack.Navigator>
          <Stack.Screen
           name="Movie"
           component={TabNav}
           options={{ title: 'Movies',
           headerStyle: {
            backgroundColor: '#293648'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',  
          }
          }}
          />
          <Stack.Screen name="details" component={Details} options={({ route }) => ({ title: route.params.name, headerBackTitle:'Back to List' })} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}
