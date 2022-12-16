import React, { useState, useEffect } from 'react'
import {
  Button,
  Grid,
  GridItem,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useTheme } from '../lib/useTheme'
import BookReviewsContainer from '../layout/BookReviewsContainer'
import ReviewForm from './ReviewForm'
import useForm from '../lib/useForm'

const BookDetails = ({ book, error }) => {
  const theme = useTheme()
  const [on, setOn] = useState(false)
  const [reviews, setReviews] = useState([])

  const { input, loading, handleChange } = useForm()

  const getAll = async (bks, lst) => [
    ...bks,
    {
      name: lst.name,
      content: lst.content,
      id: bks.length + lst.name,
      date: new Date().toISOString().slice(0, 10),
    },
  ]

  useEffect(() => {
    const dobooks = bk => bk?.reviews
    const getReviews = async () => {
      const revs = dobooks(book)
      // get w/last review included
      if (input?.name?.length > 0) {
        const allReviews = await getAll(revs, input)
        return setReviews(allReviews)
      } // otherwise existing reviews
      setReviews(revs)
    }
    getReviews()
    return () => getReviews
  }, [input, book])

  if (error) return <p>Error: {error}</p>
  if (loading) return <p>Loading...</p>

  return (
    <GridItem
      h="calc(100vh - 50px)"
      key={book.id}
      visibility={`${!on ? 'visible' : 'hidden'}`}
      className="book-details"
      data-testid="book-details"
    >
      <VStack spacing="3">
        <GridItem>
          <Text
            mt="12"
            mb="3"
            fontWeight="600"
            color={theme.colors.blue}
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
            fontWeight="600"
            color={theme.colors.red}
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
            border={[`1px solid ${theme.colors.gray}`]}
            borderRadius="4"
            p="5"
            mb="10"
          >
            <GridItem
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              p={['5', '10']}
              w="100%"
              data-testid="reviews-container"
              className="book-reviews__container"
            >
              {reviews && (
                <BookReviewsContainer
                  reviews={reviews || book.reviews}
                />
              )}
            </GridItem>
            <GridItem>
              <Button
                data-testid="add-review-book-item"
                size="small"
                py="2"
                px="5"
                bg={theme.colors.red}
                color={theme.colors.white}
                fontWeight="600"
                fontSize={['13px', '14px']}
                onClick={() => setOn(!on)}
                type="button"
                _hover={{
                  background: theme.colors.blue,
                }}
              >
                Add review
              </Button>
            </GridItem>
          </Grid>

          {on && (
            <ReviewForm
              setOn={setOn}
              on={on}
              input={input}
              handleChange={handleChange}
            />
          )}
        </GridItem>
      </VStack>
    </GridItem>
  )
}

export default BookDetails
