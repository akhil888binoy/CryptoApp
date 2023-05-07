import { VStack } from '@chakra-ui/react'
import React from 'react'
import { Spinner } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

const Loader = () => {
  return (
    <VStack h={'90vh'} justifyContent={'center'} >
      <Box transform={"scale(3)"}>
        <Spinner size={'xl'}></Spinner>
      </Box>

    </VStack>
  )
}

export default Loader