import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router'

const BookDetailsContainer = () => {
  const { pathname } = useLocation()
  const [book, setBook] = useState({})

  useEffect(() => {
    const fetchBook = async () => {
      const isBook = await axios.get(
        `http://localhost:8080${pathname}`
      )
      setBook(isBook.data)
    }
    fetchBook()
  }, [pathname])

  return <h1 data-testid="book-details-name">{book?.name}</h1>
}

export default BookDetailsContainer
