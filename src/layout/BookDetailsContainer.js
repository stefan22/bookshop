import React, { useEffect } from 'react'
import { Grid } from '@chakra-ui/react'
import BookDetails from '../components/BookDetails'
import { useFetchBookData } from '../lib/useFetchBookData.js'

const BookDetailsContainer = ({ id }) => {
  const { data, loading, error, setId } = useFetchBookData()

  useEffect(() => {
    const getBookId = async () => setId(id)
    getBookId()
  }, [id, setId])

  return (
    <Grid>
      <BookDetails
        book={data}
        loading={loading}
        error={error}
      />
    </Grid>
  )
}

export default BookDetailsContainer
