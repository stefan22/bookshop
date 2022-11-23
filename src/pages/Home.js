import React from 'react'
import { Grid } from '@chakra-ui/react'
import BooklistContainer from '../layout/BooklistContainer'

const Home = () => (
  <Grid
    minH="100vh"
    px="2"
    templateColumns="repeat(1, 3fr)"
  >
    <BooklistContainer />
  </Grid>
)

export default Home
