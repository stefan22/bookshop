import { useEffect, useState } from 'react'
import axios from 'axios'

const initialState = []
const baseUrl = 'http://localhost:8080'

export const useFetchBookData = (id = '') => {
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchBooks = async () => {
      const isUrl =
        (await id.indexOf('books')) === -1
          ? `${baseUrl}/books`
          : `${baseUrl}${id}`
      try {
        const res = await axios.get(isUrl)
        setLoading(false)
        return setData(res.data)
      } catch (err) {
        return () =>
          setError(true, () => console.log(`error: ${err.message}`))
      }
    }
    fetchBooks()
  }, [id])

  return { data, loading, error }
}
