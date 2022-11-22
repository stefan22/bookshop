import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const BookReviews = ({ id, name, date, content }) => (
  <Box
    py="2"
    key={id}
    w="100%"
    color="secondary"
    bg="whiteAlpha.100"
    data-testid="review-item"
  >
    <Text
      fontSize="18"
      color="red.500"
    >
      {content}
    </Text>
    <Box
      borderBottom="1px dotted"
      mb="18"
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
