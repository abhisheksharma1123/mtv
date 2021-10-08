import React from 'react'
import {Box, Image} from 'native-base'
export const Avatar = ({imgUrl}) =>{
  return(
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
  )
}