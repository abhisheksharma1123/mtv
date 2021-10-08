import React from 'react';
import { Text, View } from 'react-native';
import { Box, Center, Container, FormControl, Button, HStack, Icon, Heading } from "native-base"
import {SelectForm} from '../components/SelectComponent'
import {List} from '../components/ListComponent'
import {Search} from '../components/Search'
import { Ionicons } from "@expo/vector-icons"


const optionsArray = [
  {
    "movie" : "movie"
  }, 
  {
    "multi" : "multi"
  },
  {
    "tv" : "tv"
  }
]

export const SearchScreen = ({navigation}) => {
  const [service, setService] = React.useState("multi")
  const [data, setData] = React.useState([])
  const [emptyDrop, setEmptyDrop] = React.useState(true)
  const [value, setValue] = React.useState("")
  

// fetch Movies definition of function
const fetchData = async() =>{
      const res =await  fetch(`https://api.themoviedb.org/3/search/${service}?api_key=f216aa28291dcb2195fd3473f9515674&language=en-US&page=1&query=${value}&include_adult=false`)
      const data = await res.json()
      return data
    }

const handleSubmit = () =>{
      const getData = async() =>{
      const datafromApi = await fetchData()
      setData(datafromApi.results)
    }
    getData()
}


    return (
       <>
      <Center>
          <Box mt="5" w="90%">
              <Search value={value} handleChange={(event) => setValue(event.target.value)}/>
            </Box>
      </Center>

         <Box w="90%" mx="auto">
           <HStack space={2}  mt ={2} alignItems="center">
              
                <FormControl isRequired term={emptyDrop} w="60%" >
                  <SelectForm
                   optionsArray={optionsArray}
                   service={service}
                   setService = {setService}
                   search={true}
                   term={emptyDrop}
                   />
                </FormControl>

                <Box w="30%" >
                  <Button onPress={handleSubmit} style={{display:'flex', alignSelf:'center'}} size="md" leftIcon={<Icon as={Ionicons} name="search" size="3" />}>submit
                  </Button>
                </Box>

            </HStack> 
         </Box>

        { !value ? <Center >
          <Heading mt={15} h="10" size="2xl" style={{ alignSelf:"center", textAlign:"center"}}>Please initiate search</Heading>
         </Center> : <List navigation={navigation} type={service}  DATA={data}/>}
  


        </>
        
    );
  }