import React from 'react'
import { Grid, Heading } from '@chakra-ui/react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { useTheme } from './lib/useTheme'

const LazyBooks = React.lazy(() => import('./pages/Books'))

function App() {
  const theme = useTheme()
  console.log(theme)
  return (
    <div id="root-app">
      <Grid>
        <Heading
          w="100%"
          py="1"
          fontSize={['24px', '27px', '27px']}
          fontWeight="500"
          bg={theme?.colors.blue}
          color={theme?.colors.white}
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
            element={<LazyBooks />}
          />
        </Routes>
      </Grid>
    </div>
  )
}

export default App
