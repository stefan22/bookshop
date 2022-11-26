import React from 'react'
import { Grid, Heading } from '@chakra-ui/react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Books from './pages/Books'
import Home from './pages/Home'

import './App.css'

function App() {
  return (
    <div id="root-app">
      <Grid>
        <Heading
          w="100%"
          py="1"
          fontSize={['24px', '27px', '27px']}
          fontWeight="500"
          bg="gray.600"
          color="gray.50"
          align="center"
          data-testid="heading"
        >
          <NavLink to="/">Bookshop (back)</NavLink>
        </Heading>

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
    </div>
  )
}

export default App
