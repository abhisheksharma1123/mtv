import React from "react"
import { Input, Icon, Stack, FormControl } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"
export const Search = ({value, handleChange}) => {
  
  const [emptySearch, setEmptySearch] = React.useState(true)
  
  return (
    <Stack
      space={1}
      w={{
        base: "90%",
        md: "20%",
      }}
    >
    <FormControl isRequired isInvalid={emptySearch}>
     <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>
      <Input
      value={value}
      InputLeftElement={
          <Icon
            as={<MaterialIcons name="search" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
       size="lg"  
       onChange={handleChange}
       placeholder="i.e James Bond, CSi" 
       />
       </FormControl>
    </Stack>
  )
}


