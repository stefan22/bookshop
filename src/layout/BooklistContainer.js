import React, { useEffect, useState } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import Booklist from '../components/Booklist.js'
import { useFetchBookData } from '../lib/useFetchBookData.js'
import SearchBox from '../components/SearchBox'
import { BASE_URL } from '../helpers/baseUrl'

const BooklistContainer = () => {
  const { data, loading, error, searchUrl } = useFetchBookData()
  const [term, setTerm] = useState('')

  useEffect(() => {
    // sets search url & term
    searchUrl(`${BASE_URL}/books?q=${term}`)
  }, [term, searchUrl])

  return (
    <Grid>
      <GridItem>
        <SearchBox
          setTerm={setTerm}
          term={term}
        />
      </GridItem>

      <GridItem
        mt="20"
        width="100%"
        minH="420px"
      >
        <Booklist
          books={data}
          loading={loading}
          error={error}
        />
      </GridItem>
    </Grid>
  )
}

export default BooklistContainer
