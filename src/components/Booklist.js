import React from 'react'
import {
  Box,
  Center,
  Button,
  Grid,
  GridItem,
  Text,
  Flex,
} from '@chakra-ui/react'

const Booklist = ({ books, loading, error }) => {
  if (error) return <p>Error: {error}</p>

  if (!loading && books.length === 0) {
    return <p>No books available at this time</p>
  }
  if (loading) return <p>Loading...</p>

  return (
    <Center
      w="100%"
      align="center"
      data-testid="book-list"
      className="home-wrapper"
    >
      <Flex
        flexWrap="wrap"
        display="flex"
        justifyContent="center"
        flexDirection={['column', 'row', 'row']}
      >
        <Grid
          className="book-item--wrapper"
          templateColumns="repeat(3,1fr)"
          align="center"
          gap="3"
          bg="whiteAlpha.100"
        >
          {books?.map(book => (
            <GridItem
              p="6"
              key={book.id}
              borderRadius="3"
              data-testid="book-item"
              className="book-item"
            >
              <Box
                // w={['100%', '290px', '290px']}
                py="6"
                px="3"
                bg="whiteAlpha.100"
                border="3px double #727272"
                borderRadius="4"
                font="lg"
              >
                <Text
                  fontSize="3xl"
                  className="title"
                >
                  {book.name}
                </Text>

                <Center>
                  <Text
                    my="4"
                    fontSize="1lg"
                    className="description"
                  >
                    {book.intro}
                  </Text>
                </Center>
                <Button
                  _hover={{
                    bg: 'black',
                  }}
                  py="6"
                  px="2"
                  colorScheme="white"
                  fontWeight="semibold"
                  bg="red.500"
                >
                  <a href={`/books/${book.id}`}>View details</a>
                </Button>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Center>
  )
}

export default Booklist
