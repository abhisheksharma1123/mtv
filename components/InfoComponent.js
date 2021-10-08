import React from 'react'
import { Box, VStack, Heading, Text, Button } from "native-base"
export const Info = ({navigation, title, popularity, date, id, type}) =>{
  return(
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
  )
}