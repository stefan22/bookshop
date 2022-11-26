import { useState } from 'react'

const useForm = (
  initialState = {
    name: '',
    content: '',
  }
) => {
  const [input, setInput] = useState(initialState)

  const handleChange = e => {
    const { name, value } = e.target

    return setInput({
      ...input,
      [name]: value,
    })
  }

  return {
    input,
    handleChange,
  }
}

export default useForm
