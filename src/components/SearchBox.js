import React from 'react'
import { clone } from 'lodash'
import { Box, Input, Text } from '@chakra-ui/react'

const SearchBox = ({ term, setTerm }) => {
  const eventIntercept = event => {
    const value = clone(event.target.value)
    setTerm(value)
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      maxW="340px"
      margin="0 auto"
    >
      <Text
        align={['center', 'center']}
        fontSize={['22', '24']}
        htmlFor="search"
      >
        Search by:
        <br />
        <Input
          display="flex"
          value={term}
          id="book-search"
          size="lg"
          border="1px"
          fontSize={['14', '16']}
          borderColor="gray.500"
          data-testid="search"
          // onChange={e => setTerm(e.target.value)}
          onChange={eventIntercept}
          type="text"
          w={['310px', '340px']}
          variant="outline"
          placeholder="book name"
        />
      </Text>
    </Box>
  )
}
export default SearchBox
