import React, { useEffect, useState } from 'react'
import { GridItem, Container } from '@chakra-ui/react'
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
    <Container>
      <GridItem my="20">
        <SearchBox
          w="100%"
          setTerm={setTerm}
          term={term}
        />
      </GridItem>

      <GridItem mb="10">
        <Booklist
          books={data}
          loading={loading}
          error={error}
        />
      </GridItem>
    </Container>
  )
}

export default BooklistContainer
