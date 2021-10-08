import React from 'react';
import { Text, View } from 'react-native';
import { Box, Center, Container } from "native-base"
import {SelectForm} from '../components/SelectComponent'
import {List} from '../components/ListComponent'



const optionsArray = [
  {
    "top_rated" : "top_rated"
  }, 
  {
    "popular" : "popular"
  },
  {
    "now_playing" : "now_playing"
  }, 
  {
    "upcoming" : "upcoming"
  }
]

export const MovieScreen = ({navigation}) => {
  const [service, setService] = React.useState("popular")
  const [movies, setMovies] = React.useState([])

  React.useEffect(()=>{
      const getMovies = async() =>{
      const moviesfromApi = await fetchMovies()
      setMovies(moviesfromApi.results)
    }
    getMovies()
  },[service])
// fetch Movies definition of function
const fetchMovies = async() =>{
      const res =await  fetch(`https://api.themoviedb.org/3/movie/${service}?api_key=f216aa28291dcb2195fd3473f9515674&language=en-US`)

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
        <List navigation={navigation} type="movie" DATA={movies}/>
        </Box>
      </Box>
    );
  }