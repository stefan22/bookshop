import { useState } from 'react'

const useForm = (
  initialState = {
    name: '',
    content: '',
    loading: false,
  }
) => {
  const [input, setInput] = useState(initialState)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setLoading(true)
    const { name, value } = e.target
    setInput({
      ...input,
      [name]: value,
    })
    setLoading(false)
    return input
  }

  return {
    input,
    loading,
    handleChange,
  }
}

export default useForm
