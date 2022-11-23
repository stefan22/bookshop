import React, { useEffect } from 'react'
import { Grid } from '@chakra-ui/react'
import BookDetails from '../components/BookDetails'
import { useFetchBookData } from '../lib/useFetchBookData.js'
import ReviewForm from '../components/ReviewForm'

const BookDetailsContainer = ({ id }) => {
  const { data, loading, error, setId } = useFetchBookData()

  useEffect(() => {
    const getBookId = async () => setId(id)
    getBookId()
  }, [id, setId])

  return (
    <Grid templateRows="repeat(1, 1fr)">
      <BookDetails
        book={data}
        loading={loading}
        error={error}
      />

      <ReviewForm />
    </Grid>
  )
}

export default BookDetailsContainer
