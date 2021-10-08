import React from 'react';
import { Text, View, Button } from 'react-native';
import { StyleSheet, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {StackNav} from './Navigation/Stack'
import { NativeBaseProvider, Box } from 'native-base';



export default function App() {
return (
   <NativeBaseProvider>
    <NavigationContainer>
        <StatusBar backgroundColor="#293648"/>
        <StackNav/>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}
