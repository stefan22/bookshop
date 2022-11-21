import React, { useEffect, useState } from 'react'
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
    <div className="container">
      <section>
        <SearchBox
          setTerm={setTerm}
          term={term}
        />
        <Booklist
          books={data}
          loading={loading}
          error={error}
        />
      </section>
    </div>
  )
}

export default BooklistContainer
