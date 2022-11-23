import React from 'react'
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text,
  SimpleGrid,
} from '@chakra-ui/react'

const Booklist = ({ books, loading, error }) => {
  if (error) return <p>Error: {error}</p>

  if (!loading && books.length === 0) {
    return <p>No books available at this time</p>
  }
  if (loading) return <p>Loading...</p>

  return (
    <SimpleGrid
      spacing="4"
      templateColumns="repeat(auto-fill,minmax(210px,1fr))"
      data-testid="book-list"
      className="home-wrapper"
    >
      {books?.map(book => (
        <Card
          align="center"
          p={['6', '6']}
          key={book.id}
          borderRadius="3"
          data-testid="book-item"
          className="book-item"
        >
          <CardHeader>
            <Heading
              align="center"
              fontWeight={['400', '500']}
              fontSize={['22px', '20px', '18px']}
              className="title"
            >
              {book.name}
            </Heading>
          </CardHeader>
          <CardBody>
            <Text
              align="center"
              px="5"
              lineHeight="2"
              fontSize={['15', '15', '15']}
              className="description"
            >
              {book.intro}
            </Text>
          </CardBody>

          <CardFooter>
            <Button
              _hover={{
                bg: 'black',
              }}
              px="10"
              width="100%"
              fontSize={['18', '16', '15']}
              borderRadius="3"
              colorScheme="white"
              fontWeight="500"
              bg="red.600"
            >
              <a href={`/books/${book.id}`}>View details</a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  )
}

export default Booklist
