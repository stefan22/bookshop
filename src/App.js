import React from 'react'
import { Typography } from '@material-ui/core'
import BooklistContainer from './layout/BooklistContainer.js'
import './App.css'

function App() {
  return (
    <div
      data-testid="app-container"
      className="App"
    >
      <Typography
        variant="h2"
        component="h2"
        data-test="heading"
      >
        Bookshop
      </Typography>

      <BooklistContainer />
    </div>
  )
}

export default App
