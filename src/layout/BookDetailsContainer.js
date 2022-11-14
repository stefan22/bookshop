import React from 'react'
import BookDetails from '../components/BookDetails'
import { useFetchData } from '../lib/useFetchData.js'

const BookDetailsContainer = ({ id }) => {
  const { data, loading, error } = useFetchData(id)

  return (
    <BookDetails
      book={data}
      loading={loading}
      error={error}
    />
  )
}

export default BookDetailsContainer
