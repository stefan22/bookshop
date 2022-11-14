import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import Books from './pages/Books'
import Home from './pages/Home'

import './App.css'

function App() {
  return (
    <div
      data-testid="app-container"
      className="App"
    >
      <header>
        <Typography
          variant="h2"
          component="h2"
          data-testid="heading"
        >
          Bookshop
        </Typography>
      </header>
      <nav>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/books">Books</NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/books/:id"
          element={<Books />}
        />
      </Routes>
    </div>
  )
}

export default App
