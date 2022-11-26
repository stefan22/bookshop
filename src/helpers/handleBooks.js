import axios from 'axios'

const handleBooks = async (bks, setData, setLoading, setError) => {
  try {
    setError(false)
    setLoading(true)
    const res = await axios.get(bks)
    return setData(res.data)
  } catch (err) {
    return () =>
      setError(true, () => console.log(`error: ${err.message}`))
  } finally {
    setLoading(false)
  }
}

export { handleBooks }
