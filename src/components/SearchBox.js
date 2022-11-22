import React from 'react'
import { Box, Grid, GridItem, Input, Text } from '@chakra-ui/react'

const SearchBox = ({ term, setTerm }) => (
  <Grid templateColumns="repeat(1,1fr)">
    <GridItem
      w="440px"
      margin="0 auto"
    >
      <Box px="3">
        <Text
          align={['center', 'left', 'left']}
          fontSize="20"
          htmlFor="search"
        >
          Search by:
          <br />
          <Input
            value={term}
            id="search"
            size="lg"
            border="1px"
            fontSize="16"
            borderColor="gray.500"
            data-testid="search"
            onChange={e => setTerm(e.target.value)}
            type="text"
            color="secondary"
            placeholder="book name"
          />
        </Text>
      </Box>
    </GridItem>
  </Grid>
)
export default SearchBox
