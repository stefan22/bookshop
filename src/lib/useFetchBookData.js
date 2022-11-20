import { useEffect, useState } from 'react'
import { handleBooks } from '../helpers/handleBooks'
import { BASE_URL } from '../helpers/baseUrl'

const initialState = []
const initialSearch = `${BASE_URL}/books?q=`

export const useFetchBookData = (id = '') => {
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [search, searchUrl] = useState(initialSearch)

  useEffect(() => {
    const fetchBooks = async () => {
      // book search
      if (search !== initialSearch) {
        return handleBooks(search, setData, setLoading, setError)
      }
      // all books or book details pg
      const isUrl =
        id.indexOf('books') === 1
          ? `${BASE_URL}${id}`
          : `${BASE_URL}/books`

      handleBooks(isUrl, setData, setLoading, setError)
    }
    fetchBooks()
  }, [id, search])

  return { data, loading, error, searchUrl }
}
