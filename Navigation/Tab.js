import React from 'react'
import { MovieScreen } from '../Screens/MovieScreen';
import { TvScreen } from '../Screens/TvScreen';
import { SearchScreen } from '../Screens/SearchScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export const TabNav = () => {

 return (
    <Tab.Navigator>
        <Tab.Screen name="Movies" component={MovieScreen} />
        <Tab.Screen name="Search Results" component={SearchScreen} />
        <Tab.Screen name="TV Shows" component={TvScreen} />
    </Tab.Navigator>
  )

}