import React from 'react'
import { Box, Center, Container, Heading, Image, Spacer, Text } from "native-base"

export const Details = ({route})=>{
  const {id} = route.params
  const {type} = route.params
  const [result, setResult] = React.useState({})
  
 

  React.useEffect(()=>{
    console.log(result)
     const getData = async() =>{ 
      setResult(await fetchById())
    }
    getData()
  
  },[])
  
  const fetchById = async() =>{
      const res =await  fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=f216aa28291dcb2195fd3473f9515674&language=en-US`)
      const data = await res.json()
      
      return data
      
     }
// observation: on the web align-self works but for ios textAlign center
  
  return (
   <>
    
    <Center mt={50} >
          <Heading size="xl" style={{ alignSelf:"center", textAlign:"center"}}>{result.original_name || result.original_title}</Heading>
        <Container style={{textAlign:"center"}}>
        <Box mt={10} mb ={7} mx="auto">
                   {result.poster_path && <Image
                    source={{
                      uri: "https://image.tmdb.org/t/p/w500" + result.poster_path,
                    }}
                    alt={result.original_name || result.original_title}
                   size="2xl"
                    resizeMode="cover"
                  />}
        </Box> 

        <Text mb={7}>{result.overview}</Text>
        

        <Text style={{ alignSelf:"center", textAlign:"center"}}>Popularity: {result.popularity} | Release Date: {result.release_date || result.first_air_date}</Text>
        
      </Container>
    </Center>
    
   </>
  )

}