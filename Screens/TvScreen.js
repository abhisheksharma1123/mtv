import React from 'react';
import { Text, View } from 'react-native';
import { Box, Center, Container } from "native-base"
import {SelectForm} from '../components/select'
import {List} from '../components/List'



const optionsArray = [
  {
    "top_rated" : "top_rated"
  }, 
  {
    "popular" : "popular"
  },
  {
    "on_the_air" : "on_the_air"
  }, 
  {
    "airing_today" : "airing_today"
  }
]
 


export const TvScreen = ({navigation}) => {
 const [service, setService] = React.useState("popular")
  const [tvshows, setTvShows] = React.useState([])

  React.useEffect(()=>{
      const getshows = async() =>{
      const showsfromApi = await fetchTvShows()
      setTvShows(showsfromApi.results)
    }
    getshows()
  },[service])
// fetch Movies definition of function
const fetchTvShows = async() =>{
      const res =await  fetch(`https://api.themoviedb.org/3/tv/${service}?api_key=f216aa28291dcb2195fd3473f9515674&language=en-US`)

      const data = await res.json()
      return data
     
    }

    return (
      <Box>
        <Center>
            <Container>
              <SelectForm optionsArray={optionsArray} service={service} setService={setService}/>
            </Container>
        </Center>
        <Box>
        <List navigation={navigation} type="tv" DATA={tvshows}/>
        </Box>
      </Box>
    );
  }