import React from 'react'
import { Box, Input, Text } from '@chakra-ui/react'

const SearchBox = ({ term, setTerm }) => (
  <Box
    display="flex"
    justifyContent="center"
    width="100%"
    maxW="340px"
    margin="0 auto"
  >
    <Text
      align={['center', 'center', 'center']}
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
        onChange={e => setTerm(e.target.value)}
        type="text"
        w={['310px', '340px']}
        variant="outline"
        color="secondary"
        placeholder="book name"
      />
    </Text>
  </Box>
)
export default SearchBox
