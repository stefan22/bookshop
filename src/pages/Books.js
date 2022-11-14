import React from 'react'
import { NavLink } from 'react-router-dom'
import BookDetailsContainer from '../layout/BookDetailsContainer'

const Books = () => (
  <div>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/books">Books</NavLink>
    </nav>

    <BookDetailsContainer />
  </div>
)

export default Books
