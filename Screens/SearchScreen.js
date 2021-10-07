import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const SearchScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text>Movie</Text>
        <Button title="ok" onPress={()=>{navigation.navigate('settings')}}/>
      </View>
    );
  }