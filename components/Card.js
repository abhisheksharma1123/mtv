// import * as React from 'react'
// import { Box, Container, VStack, HStack, Image, Heading, Text, Button } from "native-base"

// export const Card = ({navigation, movie, imgUrl, title, date, popularity}) => (
 
//   <HStack width="95%" mx="auto" space={3}>
//               <Box mt={5}>
//                       <Image
//                       source={{
//                         uri: "https://image.tmdb.org/t/p/w500" + imgUrl,
//                       }}
//                       alt="jpg"
//                       width="110"
//                       height="110"
//                       resizeMode="cover"
//                     />
//               </Box> 
              
//               <Box mt={5} width="80%">
//                 <VStack>
//                       <Heading size="sm">{title}</Heading>
//                       <Text fontSize="sm">Popularity: {popularity}</Text>
//                       <Text fontSize="sm">Release Date: {date}</Text>
//                       <Button onPress={() => navigation.navigate('settings')} size="md" width="80%">
//                         More Details
//                       </Button>
//                  </VStack>
//               </Box>           
//       </HStack>
// )