import { useEffect, useState } from 'react'
import axios from 'axios'

const initialState = []

export const useFetchData = () => {
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/books`)
        setLoading(false)
        return setData(res.data)
      } catch (err) {
        return () =>
          setError(true, () => console.log(`error: ${err.message}`))
      }
    }
    fetchBooks()
  }, [])

  return { data, loading, error }
}
