import React from 'react'
import { Grid, GridItem, Text, VStack } from '@chakra-ui/react'
import BookReviewsContainer from '../layout/BookReviewsContainer'

const BookDetails = ({ book, loading, error }) => {
  if (error) return <p>Error: {error}</p>

  if (loading) return <p>Loading...</p>

  return (
    <GridItem
      height="100%"
      overflow-y="scroll"
      key={book.id}
      className="book-details"
      data-testid="book-details"
    >
      <VStack spacing="3">
        <GridItem>
          <Text
            mt="12"
            mb="3"
            color="red.500"
            fontSize={['24px', '24px', '26px']}
            data-testid="book-name"
            className="title"
          >
            {book.name}
          </Text>
        </GridItem>
        <GridItem>
          <Text
            width="78%"
            margin="0 auto"
            fontSize={['14', '14', '15']}
            color="secondary"
            textAlign={['justify', 'justify', 'left']}
            data-testid="book-description"
            className="book-description"
          >
            {book.description ? book.description : book.name}
          </Text>
        </GridItem>

        <GridItem>
          <Text
            fontSize="22"
            color="red.500"
            mt="12"
            mb="0"
            className="book-reviews__heading"
          >
            Book reviews
          </Text>
        </GridItem>
        <GridItem>
          <Grid
            align="center"
            border={['', '1px solid lightgray']}
            borderRadius="4"
            p="5"
            mb="10"
          >
            <GridItem
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              p="10"
              w="100%"
              data-testid="reviews-container"
              className="book-reviews__container"
            >
              {book.reviews && (
                <BookReviewsContainer reviews={book.reviews} />
              )}
            </GridItem>
          </Grid>
        </GridItem>
      </VStack>
    </GridItem>
  )
}

export default BookDetails
