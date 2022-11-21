import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
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
        <h2 data-testid="heading">Bookshop</h2>
      </header>
      <nav>
        <NavLink to="/">Home</NavLink>
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
