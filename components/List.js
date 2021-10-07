import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { Box, VStack, HStack, Image, Heading, Text, Button } from "native-base"



export const List = ({DATA, navigation, type}) => {
  const renderItem = ({ item }) => {
    let imgUrl = item.poster_path
    let title = item.original_title || item.original_name
    let popularity = item.popularity 
    let date = item.release_date || item.first_air_date
    let id = item.id
    // 
    
    
    return( 
      <HStack width="95%" mx="auto" space={3} >
              <Box mt={5}>
                          <Image
                    source={{
                      uri: "https://image.tmdb.org/t/p/w500" + imgUrl,
                    }}
                    alt="Alternate Text"
                    width="110"
                    height="110"
                    resizeMode="cover"
                  />
              </Box> 
              
              <Box mt={5} width="70%">
                <VStack>
                  <Heading width="80%" size="sm">{title}</Heading>
                  <Text fontSize="sm">Popularity: {popularity}</Text>
                  <Text fontSize="sm">Release Date: {date}</Text>
                  <Button size="md" width="80%" onPress={() => {
                    navigation.navigate('details', {id:id, type:type, name:title})
                  }}>
                    More Details
                  </Button>
                 </VStack>
              </Box>           
      </HStack>)
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

