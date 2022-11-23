import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const BookReviews = ({ id, name, date, content }) => (
  <Box
    py="2"
    key={id}
    w="100%"
    m="0 auto"
    height="100%"
    mb="0"
    color="secondary"
    bg="whiteAlpha.100"
    data-testid="review-item"
  >
    <Text
      display="flex"
      flexDirection="column"
      justifyContent="center"
      mb="1rem"
      fontSize="17"
      color="red.500"
    >
      {content}
    </Text>
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      margin="0 auto"
      borderBottom="1px dotted"
      mb="3"
      textAlign="center"
      borderColor="gray.400"
      fontSize="13"
      className="reviews__footer"
    >
      <span>Posted by: {name}</span>
      &nbsp; | &nbsp;
      <span> Date: {date}</span>
    </Box>
  </Box>
)

export default BookReviews
