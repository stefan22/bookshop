import React from 'react'
import Booklist from '../components/Booklist.jsx'
import { useFetchData } from '../lib/useFetchData.js'

const BooklistContainer = () => {
  const { data, loading, error } = useFetchData([])

  return (
    <Booklist
      books={data}
      loading={loading}
      error={error}
    />
  )
}

export default BooklistContainer
