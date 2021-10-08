import React from 'react'
import {TabNav} from './Tab'
import {Details} from  '../components/DetailsComponent'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
export const StackNav = () =>{

  return(
    <Stack.Navigator>
          <Stack.Screen
           name="Movie"
           component={TabNav}
           options={{ title: 'Movies App',
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
  )
}