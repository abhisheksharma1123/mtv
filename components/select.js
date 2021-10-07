import  React from 'react'
import { Container, Text, Heading, NativeBaseProvider, Center, Select, VStack, CheckIcon } from 'native-base';

function SelectForm({optionsArray, service, setService}){
  
 return(
   
      <VStack alignItems="center" space={4} mt="5" padd>
            <Select
              selectedValue={service}
              minWidth="200"
              accessibilityLabel="Choose Service"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              py={4}
              px={5}
              onValueChange={(itemValue) => {setService(itemValue)}}
            >
             

              {
                optionsArray.map(i=>(
    <Select.Item label={Object.keys(i)[0]} value={Object.values(i)[0]} />
  ))
              }
              
            </Select>
       </VStack>
      
  )
}
export {SelectForm}