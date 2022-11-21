import React, { useState } from 'react'

const ReviewForm = () => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const onSubmit = () => {
    console.log('submit')
  }

  return (
    <form
      className="review-form"
      noValidate
      autoComplete="off"
    >
      <h3>Submit a review</h3>
      <div className="container">
        <section>
          <input
            label="Name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </section>

        <section>
          <input
            name="content"
            label="Content"
            rows="4"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </section>

        <section>
          <button
            type="submit"
            name="submit"
            onClick={onSubmit}
          >
            Submit
          </button>
        </section>
      </div>
    </form>
  )
}

export default ReviewForm
