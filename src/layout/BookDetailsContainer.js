import React, { useEffect } from 'react'
import BookDetails from '../components/BookDetails'
import { useFetchBookData } from '../lib/useFetchBookData.js'

const BookDetailsContainer = ({ id }) => {
  const { data, loading, error, setId } = useFetchBookData()

  useEffect(() => {
    const getBookId = async () => setId(id)
    getBookId()
  }, [id, setId])

  return (
    <BookDetails
      book={data}
      loading={loading}
      error={error}
    />
  )
}

export default BookDetailsContainer
