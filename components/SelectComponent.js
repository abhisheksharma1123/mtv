import  React from 'react'
import { Container, Text, Heading, NativeBaseProvider, Center, Select, VStack, CheckIcon, FormControl } from 'native-base';

function SelectForm({optionsArray, service, setService, search, term}){
  let calculate = search && term
 return(
        <VStack alignItems="center" space={4} mt="5">
          <FormControl isRequired isInvalid={calculate}>
              {search && <FormControl.Label>Choose Search Type</FormControl.Label>}
                    <Select
                      selectedValue={service}
                      minWidth="200"
                      accessibilityLabel="Choose Service"
                      _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="sm" />,
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
                    <FormControl.ErrorMessage>
                        Movie/ Tv Show name is is.
                    </FormControl.ErrorMessage>
          </FormControl>
       </VStack>
      
  )
}
export {SelectForm}