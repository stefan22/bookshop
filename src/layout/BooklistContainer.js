import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
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
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        xs={12}
      >
        <SearchBox
          setTerm={setTerm}
          term={term}
        />
        <Booklist
          books={data}
          loading={loading}
          error={error}
        />
      </Grid>
    </Grid>
  )
}

export default BooklistContainer
