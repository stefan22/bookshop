import { useEffect, useState } from 'react'
import { handleBooks } from '../helpers/handleBooks'
import { BASE_URL } from '../helpers/baseUrl'

const initialState = []
const initialSearch = `${BASE_URL}/books?q=`

export const useFetchBookData = () => {
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [search, searchUrl] = useState(initialSearch)
  const [id, setId] = useState('')

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setError(false)
        setLoading(true)
        // book search
        if (search !== initialSearch) {
          return handleBooks(search, setData, setLoading, setError)
        }
        // all books or book details pg
        const isUrl =
          (await id.indexOf('books')) === 1
            ? `${BASE_URL}${id}`
            : `${BASE_URL}/books`

        handleBooks(isUrl, setData, setLoading, setError)
      } catch (err) {
        setError(false)
      } finally {
        setLoading(false)
      }
    }
    fetchBooks()
  }, [id, search])

  return { data, loading, error, searchUrl, setId }
}
