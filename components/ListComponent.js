import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { Box, Container, VStack, HStack, Image, Text, Button } from "native-base"
import {Avatar} from './AvatarComponent'
import {Info} from './InfoComponent'

export const List = ({DATA, navigation, type}) => {
  const renderItem = ({ item }) => {
    let imgUrl = item.poster_path
    let title = item.original_title || item.original_name
    let popularity = item.popularity 
    let date = item.release_date || item.first_air_date
    let id = item.id
    
      return( 
      <HStack width="95%" mx="auto" space={3} >
              <Avatar imgUrl={imgUrl} />
              <Info navigation={navigation}
                    title={title}
                    popularity={popularity}
                    date = {date}
                    id ={id}
                    type= {type}
                />          
      </HStack>
            )
                                    }

  return (
    <SafeAreaView >
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

