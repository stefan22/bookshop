import React from 'react'
import { Text, Grid } from '@chakra-ui/react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Books from './pages/Books'
import Home from './pages/Home'

import './App.css'

function App() {
  return (
    <Grid
      w="100%"
      color="secondary"
      data-testid="app-container"
    >
      <header>
        <Text
          py="1"
          color="gray.50"
          align="center"
          data-testid="heading"
        >
          <NavLink to="/">Bookshop (back)</NavLink>
        </Text>
      </header>

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
    </Grid>
  )
}

export default App
