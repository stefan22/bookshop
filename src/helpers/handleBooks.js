import axios from 'axios'

const handleBooks = async (bks, setData, setLoading, setError) => {
  try {
    const res = await axios.get(bks)
    setLoading(false)
    return setData(res.data)
  } catch (err) {
    return () =>
      setError(true, () => console.log(`error: ${err.message}`))
  }
}

export { handleBooks }
