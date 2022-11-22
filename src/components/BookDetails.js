import React from 'react'
import { Grid, GridItem, Text, VStack } from '@chakra-ui/react'
import BookReviewsContainer from '../layout/BookReviewsContainer'

const BookDetails = ({ book, loading, error }) => {
  if (error) return <p>Error: {error}</p>

  if (loading) return <p>Loading...</p>

  return (
    <Grid
      templateRows="repeat(1,1fr)"
      key={book.id}
      className="book-details"
      data-testid="book-details"
    >
      <VStack>
        <GridItem>
          <Text
            color="red.500"
            fontSize="2xl"
            data-testid="book-name"
            className="title"
          >
            {book.name}
          </Text>
        </GridItem>
        <GridItem>
          <Text
            fontSize="16"
            color="secondary"
            data-testid="book-description"
            className="book-description"
          >
            {book.description ? book.description : book.name}
          </Text>
        </GridItem>

        <GridItem>
          <Text
            fontSize="22"
            color="20"
            mt="7"
            className="book-reviews__heading"
          >
            Book reviews
          </Text>
        </GridItem>
        <GridItem>
          <Grid>
            <GridItem
              bg="blue.50"
              p="5"
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
    </Grid>
  )
}

export default BookDetails
