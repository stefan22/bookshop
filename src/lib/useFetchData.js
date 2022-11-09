import { useEffect, useState } from 'react'
import axios from 'axios'

const initialState = []

export const useFetchData = () => {
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchBooks = async () => {
      setError(false)
      setLoading(true)
      try {
        const res = await axios.get(`http://localhost:8080/books`)
        setData(res.data)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchBooks()
  }, [])

  return { data, loading, error }
}
