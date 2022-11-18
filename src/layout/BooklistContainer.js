import React from 'react'
import Booklist from '../components/Booklist.js'
import { useFetchBookData } from '../lib/useFetchBookData.js'

const BooklistContainer = () => {
  const { data, loading, error } = useFetchBookData()

  return (
    <Booklist
      books={data}
      loading={loading}
      error={error}
    />
  )
}

export default BooklistContainer
