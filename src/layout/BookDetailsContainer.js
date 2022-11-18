import React from 'react'
import BookDetails from '../components/BookDetails'
import { useFetchBookData } from '../lib/useFetchBookData.js'

const BookDetailsContainer = ({ id }) => {
  const { data, loading, error } = useFetchBookData(id)

  return (
    <BookDetails
      book={data}
      loading={loading}
      error={error}
    />
  )
}

export default BookDetailsContainer
