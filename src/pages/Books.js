import React from 'react'
import { useLocation } from 'react-router-dom'
import BookDetailsContainer from '../layout/BookDetailsContainer'

const Books = () => {
  const { pathname } = useLocation()
  return (
    <div>
      <BookDetailsContainer id={pathname} />
    </div>
  )
}

export default Books
